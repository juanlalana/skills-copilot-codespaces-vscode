// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function (req, res) {
    console.log(req.method, req.url);
    if (req.url === '/comments.html') {
        fs.readFile('comments.html', function (err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});
server.listen(3000);
console.log('Server listening on port 3000');