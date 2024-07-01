const container = document.querySelector('.container');
const form = document.querySelector('form');
const input = document.querySelector('#input');

// Load tasks from local storage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        savedTasks.forEach(task => {
            addNewTask(task);
        });
    }
});

form.addEventListener('submit', () => {
    const value = input.value;
    if(value && value!=' '){
        addNewTask(value);
    }
});

function addNewTask(value) {
    const task = document.createElement('div');
    task.classList.add('tasks');

    const para = document.createElement('p');
    para.innerHTML = value;

    const symbols = document.createElement('div');
    symbols.classList.add('symbols');

    const check = document.createElement('i');
    const trash = document.createElement('i');

    check.classList.add('fa-regular', 'fa-square-check', 'check');
    trash.classList.add('fa-solid', 'fa-trash', 'trash');
    trash.style.marginLeft = "4px";

    symbols.appendChild(check);
    symbols.appendChild(trash);

    task.appendChild(para);
    task.appendChild(symbols);
    container.appendChild(task);

    // Save tasks to local storage
    saveTasks();
}

function saveTasks() {
    const tasks = Array.from(container.querySelectorAll('.tasks')).map(task => task.querySelector('p').innerHTML);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('check')) {
        const paragraph = e.target.closest('.tasks').querySelector('p');
        paragraph.innerHTML = `<del>${paragraph.innerHTML}</del>`;
        paragraph.style.transform = "scale(0.9)";
        // Update local storage
        saveTasks();
    }
    if (e.target.classList.contains('trash')) {
        e.target.closest('.tasks').remove();
        // Update local storage
        saveTasks();
    }
});
