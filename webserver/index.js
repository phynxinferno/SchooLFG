var https = require('https');
var Discord = require('discord.js');
var properties = require('./properties.json')
var fs = require('fs');
const options = {
    key: fs.readFileSync('/home/phynx/SchooLFG-Keys/key.pem'),
    cert: fs.readFileSync('/home/phynx/SchooLFG-Keys/cert.pem')
}
function genScript(token) { 
    var script = `
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
  console.log(assignments)
    `
}
var server = https.createServer(options, function(req, res){
    console.log(req.headers);
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + "/pages/home/index.html"))
}).listen(properties.Port,properties.Hostname);
console.log("Webserver started. Listening at " + properties.Hostname + " on port " + properties.Port + ' and showing HTML file ' + __dirname + "/pages/home/index.html");
