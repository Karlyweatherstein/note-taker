//requiring server
const express = require('express');

// Running on PORT 3001
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('/routes/apiRoutes');
const htmlRoutes = require('/routes/htmlRoutes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listening
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});



  