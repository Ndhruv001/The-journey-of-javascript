const accessKey = "hdAw1axxfdIp6CS738YNx0S0CzGVoqIz72LZHPmZhOc";
const form = document.querySelector('form');
const input = document.querySelector('.input');
const resultContainer = document.querySelector('.resultContainer');
const loadMoreButton = document.querySelector('.loadMore');
const loadContainer = document.querySelector('.load');

let inputValue = "";
let page = 1;

async function imageSearch(data) {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${data}&client_id=${accessKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("There is a network problem!");
        }
        const result = await response.json();
        page++;
        return result;
    } catch (error) {
        console.error("Error occurred:", error);
        return null;
    }
}

function createImageElement(photo) {
    const result = document.createElement('div');
    result.className = "result";
    const description = document.createElement('div');
    description.className = "description";

    const img = document.createElement('img');
    img.className = "img";
    img.src = photo.urls.full;

    const a = document.createElement('a');
    a.innerText = photo.alt_description;
    a.href = photo.links.html;
    a.target = "_blank";

    description.appendChild(a);
    result.appendChild(img);
    result.appendChild(description);

    return result;
}

async function loadImages() {
    const response = await imageSearch(inputValue);
    if (response) {
        response.results.forEach(photo => {
            resultContainer.appendChild(createImageElement(photo));
        });
        loadContainer.classList.add('active');
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (inputValue !== input.value) {
        resultContainer.innerHTML = ""; // Clear previous results
        page = 1;
    }
    inputValue = input.value;
    await loadImages();
});

loadMoreButton.addEventListener('click', async () => {
    await loadImages();
});
