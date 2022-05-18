//express server
const express = require('express');
const fs = require('fs');
const path = require('path');
const { notes } = require('/db/db.json')


//creating paths

// Running on PORT 3001
const PORT = process.env.PORT || 3001;
const app = express();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// HTML Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});



// API Routes

// Get
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// Post
app.post("/api/notes", (req, res) => {
    notes.findAll() 
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));     
});


// Listening
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});