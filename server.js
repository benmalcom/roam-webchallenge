// server.js
const express = require('express');
const http = require('http');
const serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + '/build'));
const server = http.createServer(app);
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`App ready on ${port}`));
