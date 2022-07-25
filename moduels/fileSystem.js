
const fs = require('fs');
const filesWrite = () => {
   return fs.writeFile('demo.txt', "we love Bangladesh peoples", (err)=>{
        if(err){
            console.log('Error :', err);
        }else{
            console.log('success')
        }
    });
}

// console.log(fs);

const appendFiles = ()=>{
    
    return fs.appendFile('demo.txt', " and i am 30 year olds", (err)=>{
        if(err){
            console.log('append Filed: ', err)
        }else{
            console.log('append file success');
        }
    })
} 

const readFiles = () => {

  return  fs.readFile('demo.txt', 'utf-8', (error, data)=>{
            if(error){
                console.log('Error Files : ', error)
            }else{
                console.log(data);
            }
        }
    )
}

const renameFiels = () =>{
    return fs.rename('demo.txt','demo2.txt', (err)=>{
        if(err){
            console.log('error : ', err )
        }else{
            console.log('success');
        }
    })
}

// delete files 

const deleteFiles = () =>{
    return fs.unlink('demo2.txt',(err) =>{
        if(err){
            console.log('error : ', err);
        }else{
            console.log('Success');
        }
    })
}

module.exports = {
    filesWrite,
    appendFiles,
    readFiles,
    renameFiels,
    deleteFiles
}

