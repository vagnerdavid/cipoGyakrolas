const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 4444;

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log("----------------------------------------------------------------");

    switch(true){
        case req.url === "/" && req.method === "GET":
            fs.readFile('./views/card.html', (err, data) => {
                res.setHeader('content-type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });
            break;

            case req.url === "/favicon.ico" && req.method === "GET":
                fs.readFile('./favicon.ico', (err, data) =>{
                    res.setHeader('content-type', 'image/ico');
                    res.writeHead(200);
                    res.end(data);
                });
                break;
            case req.url === "/ferficipo.jpg" && req.method === "GET":
                fs.readFile('./images/ferficipo.jpg', (err, data) =>{
                    res.setHeader('content-type', 'image/png');
                    res.writeHead(200);
                    res.end(data);
                });
                break;
                case req.url === "/noicipo.jpg" && req.method === "GET":
                fs.readFile('./images/noicipo.jpg', (err, data) =>{
                    res.setHeader('content-type', 'image/png');
                    res.writeHead(200);
                    res.end(data);
                });
                break;

        default:
            res.setHeader('content-Type', 'text/html');
            res.writeHead(404);
            res.end('<h1>HIBA<h1><a href="/">Vissza a fooldalra</a>');
            break;         
    }
});
server.listen(port);