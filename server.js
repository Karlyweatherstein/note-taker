//requiring server
const express = require('express');
const fs = require('fs');
const path = require('path');
const { notes } = require('./db/notes');



// Running on PORT 3001
const PORT = process.env.PORT || 3001;
const app = express();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// HTML Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});





// API Routes
//Takes in new data, turns it into a string and pushes it into my db/notes file
function addNote(body, noteArray) {
    const newNote = body;
    noteArray.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, './db/notes.json'),
      JSON.stringify({notes: noteArray}, null, 2)
    );
    return newNote;
};

// Get


// Post
app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const allData = addNote(req.body, notes);
    res.json(allData);
});

app.get('/api/notes', (req, res) => {
    let data = notes;
    res.json(data);
});

// Listening
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});