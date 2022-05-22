const fs = require('fs');
const path = require('path');

function addNote(body, noteArray) {
    const newNote = body;
    noteArray.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, './data/notes.json'),
      JSON.stringify({notes: noteArray}, null, 2)
    );
    return newNote;
};
