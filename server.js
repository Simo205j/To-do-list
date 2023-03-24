const express = require('express');
const server = express();
const PORT = 8000;

server.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

server.get('/home.css', (req, res) => {
    res.sendFile(__dirname + '/Navbar.css');
});

server.get('/kanban', (req, res) => {
    res.sendFile(__dirname + '/tasks.html');
});

server.get('/tasks.css', (req, res) => {
    res.sendFile(__dirname + '/tasks.css');
});

server.get('/task.js', (req, res) => {
    res.sendFile(__dirname + '/tasks.js');
});

server.get('/drag_task.js', (req, res) => {
    res.sendFile(__dirname + '/drag_tasks.js');
});

server.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

server.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});