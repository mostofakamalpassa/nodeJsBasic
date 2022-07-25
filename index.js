// we can use but it is not recommended
const s1 = require('./moduels/students');
// but it is recommended
const {getName, getAge} = require('./moduels/students') 

// console.log(s1.getName());
// console.log(s1.getAge());

const {filesWrite, appendFiles, readFiles}  = require('./moduels/fileSystem')
// console.log(filesWrite());
// console.log(appendFiles());

console.log(readFiles());