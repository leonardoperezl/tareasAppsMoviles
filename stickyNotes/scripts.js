var newNoteInput = document.getElementById("newNoteInput");
var noteElement = document.getElementById("newNote");


function getNewNoteValue() {
    var newNoteText = newNoteInput.value;
    return newNoteText;
}

function createNewNote() {
    var newNoteText = getNewNoteValue()
    var newNoteElement = noteElement.cloneNode(true)
    newNoteElement.style.display = "inline-block"
    

    document.getElementById("notesContainer").appendChild(newNoteElement)
}

