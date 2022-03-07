var https = require('https');
var Discord = require('discord.js');
var properties = require('./properties.json')
var fs = require('fs');
const options = {
    key: fs.readFileSync('/home/phynx/SchooLFG-Keys/key.pem'),
    cert: fs.readFileSync('/home/phynx/SchooLFG-Keys/cert.pem')
}
var server = https.createServer(options, function(req, res){
    console.log(req.headers);
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + "/pages/home/index.html"))
}).listen(properties.Port,properties.Hostname);
console.log("Webserver started. Listening at " + properties.Hostname + " on port " + properties.Port + ' and showing HTML file ' + __dirname + "/pages/home/index.html");
