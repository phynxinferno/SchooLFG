Document.addEventListener("DOMContentLoaded", function() {
    var Date = new Date();

})
function UpdateTime() {
    var Date = new Date();
    var time = Date.getHours() + ":" + Date.getMinutes() + ":" + Date.getSeconds();
    setInterval(function() {
        Document.getElementById("time").innerHTML = time;
    })
}