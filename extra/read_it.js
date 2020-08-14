//5th exercise
// mistake : did not make internal class method

//source: https://www.freecodecamp.org/news/pipe-and-compose-in-javascript-5b04004ac937/

// Implement a Readable stream, initiate a new stream instance  
// from your implementation and pipe to process.stdout. You  
// will receive the content to add to your stream like first  
// argument. 

const { Readable } = require('stream')

class ReadableStream extends Readable{
    constructor (content, options ={}) {
        super(options)  //making a dict?
        this.content = content
    }
//  BELOW Note: This _read method MUST NOT be called by application  
// code directly. It should be called by the internal Readable  
// class methods only.  

    _read (size) {
        if (!this.content) return this.push(null)
        this.push(this.content.slice(0,size)) //adding to data stream
        this.content = this.content.slice(size) //reassign var
    }
}

const stream = new ReadableStream(process.argv[2]) //directory
stream.pipe(process.stdout)

// my first solution:

// var Readable = require('stream').Readable;

// var rs = new Readable();
// rs.push('beep');

// rs.pipe(process.stdout)


// readable streams can be flowing or paused

// flowing - data is read automatically

// paused = read() method must be invoked explicitly to read chunks of data from stream

// all readable streams begin in paused mode but can be switched

// class Rectangle {
//     constructor() {}
//     static logNbSides() {
//       return 'I have 4 sides';
//     }
//   }
  
//   class Square extends Rectangle {
//     constructor() {}
//     static logDescription() {
//       return super.logNbSides() + ' which are all equal';
//     }
//   }
//   Square.logDescription(); // 'I have 4 sides which are all equal'
//SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

// ACTUAL                                 EXPECTED                
// ────────────────────────────────────────────────────────────────────────────────

//    "Family of Blood"                   ==    "Family of Blood"                  
//    "Uvodni"                            ==    "Uvodni"                           
//    "Gryffen family ghosts"             ==    "Gryffen family ghosts"            
//    "Skullion"                          ==    "Skullion"                         
//    "Zolfa-Thuran"                      ==    "Zolfa-Thuran"                     
//    "Master Brain"                      ==    "Master Brain"                     
//    "Plasmaton"                         ==    "Plasmaton"                        
//    "Proto-human"                       ==    "Proto-human"                      
//    "Chronovore"                        ==    "Chronovore"                       
//    "Zanak humanoid"                    ==    "Zanak humanoid"                   
//    ""                                  ==    ""                                 

//https://github.com/workshopper/stream-adventure