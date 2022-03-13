var https = require('https');
var Discord = require('discord.js');
var properties = require('./properties.json')
var fs = require('fs');
const options = {
    key: fs.readFileSync('/home/phynx/SchooLFG-Keys/key.pem'),
    cert: fs.readFileSync('/home/phynx/SchooLFG-Keys/cert.pem')
}
function genScript(token) {
    var activeScripts = fs.readFileSync('./requests.json')
    let script = `
        var date = new Date();
        var assignments = [];
        var today = date.getDate();
        var thisMonthUnformatted = date.getMonth()
        var thisMonth = thisMonthUnformatted += 1
        var thisYear = date.getFullYear()
        console.log(thisMonth)
        var classes = Classroom.Courses.list().courses;
        for(const element of classes) {
          console.log(element.id);
          var material = Classroom.Courses.CourseWork.list(element.id,{"courseWorkStates":["PUBLISHED"]}).courseWork
          try {
          for (const element of material) {
            console.log(element);
            try {
            if (element.dueDate.month === thisMonth && element.dueDate.year === thisYear) {
              assignments.push(element)
              console.log("added " + element.title + " to report queue")
            }
            }
            catch(err) {}
          }
          }
          catch(err) {}
        }
        exampleFetch(` + token + `, ` + properties.Hostname + `, "POST)`    
        let requests = JSON.parse(fs.readFileSync('./proper'))
    return script;
}
var server = https.createServer(options, function(req, res){
    /*console.log(req.headers);
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + "/pages/home/index.html"))*/
    switch(req.method) {
        case "GET":
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);;
            res.end(fs.readFileSync(__dirname + "/pages/home/index.html"));
        case "POST":
            if(req.headers.message['type'] == 'scReq') {
                res.setHeader("text/javascript")
                res.writeHead(200)
                res.end(genScript(Math.floor(Math.random() * 1000)))
            }
    }
}).listen(properties.Port,properties.Hostname);
console.log("Webserver started. Listening at " + properties.Hostname + " on port " + properties.Port + ' and showing HTML file ' + __dirname + "/pages/home/index.html");
