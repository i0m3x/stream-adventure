
//NOT WORKING

//SOLUTION: https://github.com/workshopper/stream-adventure/blob/master/problems/http_client/solution.js

const http = require('http')
const options = { method: 'POST'}

const req = request('http://localhost:8099', options, (res) => {
    res.pipe(process.stdout)

})

process.stdin.pipe(req)

//SOURCE:
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);