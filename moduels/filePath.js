

const path = require('path');
const filePath = () =>{

    console.log('dir name', __dirname);
    console.log('file  name', __filename);
    // console.log('format ', path.format('/moduels/filePath.js'));
    console.log('extends ', path.extname('index.html'));
    const joinName = path.join(__dirname + " / views");

    console.log("join files : ", joinName);
}

module.exports = {
    filePath
}