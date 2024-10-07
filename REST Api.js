
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


let users = [];


app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

app.get('/users', (req, res) => {
    res.json(users);
});


app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find((u, index) => index === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});


app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((u, index) => index === userId);
    if (userIndex !== -1) {
        users[userIndex] = req.body;
        res.json(users[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});


app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if (users[userId]) {
        users.splice(userId, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
