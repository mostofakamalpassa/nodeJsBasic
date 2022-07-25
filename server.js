

const http = require('http');

const port = 5000;
const hostName = '127.0.0.1';
http.createServer((req, res)=>{
    res.writeHead(202,{'content-type':'text/html'})
    res.write("Hello I am servers");
}).listen(port, hostName,()=>{
    console.log('listing Servers '+ hostName + ' ' + port);
})