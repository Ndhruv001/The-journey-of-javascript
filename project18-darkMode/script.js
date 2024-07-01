const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const button = document.querySelector('button');

// Retrieve the isDarkMode value from localStorage and convert it to a boolean
let isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));

if (isDarkMode) {
    black()
} else {
    white()
}

toggle.addEventListener('click', () => {
    local();
    // Toggle the styles based on the updated value of isDarkMode
    if (isDarkMode) {
        black()
    } else {
        white()
    }
});
function black(){
    body.style.backgroundColor = "black";
    button.style.left = "59%";
    button.style.backgroundColor = "black";
    toggle.style.backgroundColor = "white";
}
function white(){
    body.style.backgroundColor = "white";
    button.style.left = "0";
    button.style.backgroundColor = "white";
    toggle.style.backgroundColor = "grey";
}

function local() {
    // Toggle the value of isDarkMode
    isDarkMode = !isDarkMode;

    // Store the updated value of isDarkMode in localStorage
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
}
