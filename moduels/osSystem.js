const os = require('os');

const osSystem = () =>{

    console.log(os.userInfo());
    console.log("homedir ", os.homedir());
    console.log("total memory", os.totalmem());
    console.log('host name', os.hostname());
    console.log('free memory : ', os.freemem());
}

module.exports = {osSystem}

// console.log(os);