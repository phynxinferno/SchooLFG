var http = require('http');
var Discord = require('discord.js');
var url = require('url');
var properties = require('./properties.json')
console.log(__dirname)
var fs = require('fs').promises;
const listener = function (req, res) {
    var site = url.parse(req.url).pathname;
    switch(path) {
        case '/' :
            fs.readFile(__dirname + '/pages/home/index.html')
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    });
        
    }
}
const server = http.createServer(listener);
server.listen(properties.Port,'127.0.0.1', () => {
    //e
})