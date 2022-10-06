const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
     console.log('In the middle of the back-end!');
     next();
});

app.use((req, res, next) => {
    console.log('In the middle of the second back-end!');
    res.send("<h1>Hello from Express!</h1>")
});

const server = http.createServer(app);

server.listen(4000);