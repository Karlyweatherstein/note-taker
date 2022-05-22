const router = require('express').Router();
const { notes } = require('./data/notes.json');
const { addNote } = require('../../lib/notes');

// API Routes
//Takes in new data, turns it into a string and pushes it into my data/notes file



// Get
router.get('/api/notes', (req, res) => {
    let data = JSON.parse(fs.readFileSync('data/notes.json', 'utf8'));
    res.json(data);

    
});

// Post
router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const allData = addNote(req.body, notes);
    res.json(allData);
});


module.exports = router;
