const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('Mon premier javascript server by OPBco');
});

server.listen(process.env.PORT || 3000);