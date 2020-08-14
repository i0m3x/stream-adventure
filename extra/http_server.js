//mistake: spelling error throught

//source: https://github.com/workshopper/stream-adventure/blob/master/problems/http_server/solution.js

const through = require('through2')
const http = require('http')

// upper case for POST

const server = http.createServer(function(req, res){

    if(req.method == 'POST') {
        req.pipe(through(function (buf, _, next) {
            this.push(buf.toString().toUpperCase())
            next()
        })).pipe(res)
    } else res.end('send me a Post')

});
server.listen(parseInt(process.argv[2]))


// mizgino@mizgino-HP-ProBook-4540s:~/Documents/javascript/stream-adventure$ node http_server.js 
// internal/validators.js:193
//     throw new ERR_SOCKET_BAD_PORT(name, port, allowZero);
//     ^

// RangeError [ERR_SOCKET_BAD_PORT]: options.port should be >= 0 and < 65536. Received NaN.
//     at validatePort (internal/validators.js:193:11)
//     at Server.listen (net.js:1442:5)
//     at Object.<anonymous> (/home/mizgino/Documents/javascript/stream-adventure/http_server.js:16:8)
//     at Module._compile (internal/modules/cjs/loader.js:1251:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1272:10)
//     at Module.load (internal/modules/cjs/loader.js:1100:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:962:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
//     at internal/main/run_main_module.js:17:47 {
//   code: 'ERR_SOCKET_BAD_PORT'
