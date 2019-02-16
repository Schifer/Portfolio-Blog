const express = require('express');

const port = process.env.port || 3000;
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + "/public/"));

// Landing Page
app.get('/', (req, res) => {
    res.render('landing/index'); // Note: Doesn't have to tell to look on views folder!!!
});

// Experiences Page
app.get('/experiences', (req, res) => {
    res.render('landing/experiences');
});

app.get('/snakegame', (req, res) => {
    res.send('This will be the snake game page.');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}. :)`);
});