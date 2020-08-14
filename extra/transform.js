// convert data

// npm install through2

// call write and end

const through = require('through2')


const tr = through(function(buf, _, next){
    this.push(buf.toString().toUpperCase())
    next()
})
process.stdin.pipe(tr).pipe(process.stdout)

//my solution -WRONG

// const stream = through(write,end)

// function write(buffer, encoding, next){
//     this.push(buffer)
//     next()

// }
// function end(done){
//     done()
// }

// process.stdin.pipe(stream).pipe(process.stdout)

// buffer.toString()