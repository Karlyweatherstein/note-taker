const express = require('express');
const fs = require('fs');

//creating paths
const dbPath = path.join(__dirname, "/db")
const publicPath = path.join(__dirname, "/public")

// Running on PORT 3001
const PORT = process.env.PORT || 3001;
const app = express();

//Routes
app.get('/api/notes', (req, res) => {
    if (req){
        res.json(results)
    }
})


// Listening
app.listen(PORT, () => {
    console.log(`API server now on port 3001`);
});