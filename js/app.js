const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello WORLD');
});

server.listen(8000);