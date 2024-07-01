const button = document.querySelector('button');
const p = document.querySelector('.container p');

button.addEventListener('click', () => {
    p.innerHTML = "Updating...";
    button.disabled = true;
    button.innerHTML = "Loading...";
    button.style.cursor = "default";

    joke()
        .then(result => {
            if (typeof result === 'object') {
                const del = document.createElement('p');
                const set = document.createElement('p');
                set.innerHTML = result.setup;
                del.innerHTML = result.delivery;
                p.innerHTML = "";
                p.appendChild(set);
                p.appendChild(del);
            } else {
                p.innerHTML = "";
                p.innerHTML = result;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            p.innerHTML = p.innerHTML = `${error}`;
        })
        .finally(() => {
            button.disabled = false;
            button.innerHTML = "TELL ME A JOKE";
            button.style.cursor = "pointer";
        });
});

function joke() {
    return fetch("https://v2.jokeapi.dev/joke/Any")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.type === "single") {
                return data.joke;
            } else {
                return { setup: data.setup, delivery: data.delivery };
            }
        })
        .catch(error => {
            console.error('There was an error with the fetch operation:', error);
            throw error;
        });
}
