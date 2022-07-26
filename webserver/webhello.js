const port = (process.argv[2]|| process.env.PORT || 5000);
const http = require('http');

http.createServer((req, res)=>{

    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end(`<h2>Hello world we love every thins</h2>`);
}).listen(port,  ()=>{
    console.log('server is running '+port);
})