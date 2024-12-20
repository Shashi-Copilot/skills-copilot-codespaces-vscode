//create webserver
const express = require('express');
const app = express();
app.use(express.json());

//create a port
const port = 8080;

//create an array to store comments
const comments = [
    {id: 1, author: 'John', content: 'Hello!'},
    {id: 2, author: 'Jane', content: 'Hi there!'}
];

//GET method
app.get('/comments', (req, res) => {
    res.send(comments);
});

//POST method
app.post('/comments', (req, res) => {
    const comment = {
                id: comments.length + 1,
                author: req.body.author,
                content: req.body.content
            };
            comments.push(comment);
            res.status(201).send(comment);
        });