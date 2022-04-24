const express = require('express');
const fs = require('fs');

//creating paths

// Running on PORT 3001
const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//HTML Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(publicPath, 'notes'));
})


// //Routes
app.get('/api/notes', (req, res) => {
    if (req){
        res.json(results)
    }
})


// Listening
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});