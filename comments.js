// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set up comments array
let comments = [];

// Set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set up static files
app.use(express.static('public'));

// Get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create comment
app.post('/comments', (req, res) => {
    let comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});