const add=document.querySelector('.addNote');
const noteApp=document.querySelector('.noteApp');



// Initialize existing notes
getNotes().forEach((note) => {
    noteElement(note.id, note.content);
});

// Function to create a new note element
function noteElement(id, content) {
    const text = document.createElement('textarea');
    text.className = "note";
    text.placeholder = "Empty note";
    text.cols = "30";
    text.rows = "10";
    text.value = content;
    text.id = id;

    // Add event listeners
    text.addEventListener('dblclick', () => {
        const warning = confirm("Do you want to delete this note?");
        if (warning) {
            deleteNode(id);
            noteApp.removeChild(text); // Remove the text element from the DOM
        }
    });

    text.addEventListener('input', () => {
        updateNote(id, text.value);
    });

    // Append the note element
    appendNote(text);
}

// Function to append a note to the noteApp container
function appendNote(note) {
    noteApp.insertBefore(note, add);
}

// Function to delete a note
function deleteNode(id) {
    let notes = getNotes();
    notes = notes.filter((note) => note.id !== id);
    setNotes(notes);
}

// Function to update a note's content
function updateNote(id, value) {
    let notes = getNotes();
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
        notes[index].content = value;
        setNotes(notes);
    }
}

// Function to retrieve notes from localStorage
function getNotes() {
    return JSON.parse(localStorage.getItem('note')) || [];
}

// Function to store notes in localStorage
function setNotes(notes) {
    localStorage.setItem('note', JSON.stringify(notes));
}

// Function to add a new note
function addNote() {
    const notes = getNotes();
    const id = Math.floor(Math.random() * 100000); // Generate a random ID
    const noteObj = {
        id: id,
        content: ""
    };
    noteElement(noteObj.id, noteObj.content);
    notes.push(noteObj);
    setNotes(notes);
}

// Event listener for adding a new note
add.addEventListener('click', addNote);
