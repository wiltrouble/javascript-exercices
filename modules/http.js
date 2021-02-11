const http = require('http');

http.createServer(router).listen(3000);

function router (req, res) {
    console.log('new request');
    console.log(req.url);
    res.writeHead(201, {'Content-Type': 'Text plain'})
    console.log(res.write("Hi, I already can use http of nodejs"))
    res.end();
}

console.log("Listen http in the port 3000")