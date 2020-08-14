//2nd exercise
// mistakes : did not have filename, did not input

const fs = require('fs')
filename = process.argv[2]
fs.createReadStream(filename).pipe(process.stdout)

//Stdout, also known as standard output, is the default file descriptor where a process can write output.

   
// The pipe method allow you to connect the output of the  
// readable stream as the input of the writable stream  
 
//    readable.pipe(writable)  
 
// If you pipe into a duplex stream you can chain to other  
// stream.  
 
//    readable.pipe(duplex).pipe(writable)  

// » Readable stream, which data can be read.                      
// » Writable stream, which data can be written.                   
// » Duplex stream, which is both Readable and Writable.           
// » Transform stream, which is a Duplex stream that can                                                              
//   modify or transformthe data as it is written and read.  

              
// "Sirian"        ==    "Sirian"                           
// "Ukkan"         ==    "Ukkan"                            
// "The 4-5-6"     ==    "The 4-5-6"                        
// "Biomechanoid"  ==    "Biomechanoid"                     
// "Night Traveller==    "Night Travellers"                 
// "Magma beast"   ==    "Magma beast"                      
// "Veil"           =    "Veil"                             
// "Bell Plant"    ==    "Bell Plant"                       
// ""              ==    ""     