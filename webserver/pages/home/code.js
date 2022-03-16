function translateMonth(month) {
    switch(month) {
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
    }
}
function translateDay(day) {
    switch(day){
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Sunday"
    }
}
function updateTime() { 
    setInterval(function() {
        console.log("updating");
    var date = new Date();
    if (date.getHours() > 11) {
        if(date.getHours() > 12) {
            var time = date.getHours() - 12 + ":" + date.getMinutes() + " PM"
        } else {
            var time = date.getHours() + ":" + date.getMinutes() + " PM"
        } 
    } else {
        var time = date.getHours() + ":" + date.getMinutes() + " AM"
    } 
    document.getElementById("Topbar").children[0].innerHTML = time
    console.log("Updated time")
    var tDate = translateDay(date.getDay()) + ", " + translateMonth(date.getMonth()) + " " + date.getDate()
},1000)
}
document.addEventListener("DOMContentLoaded", function() {
    updateTime()
    //document.getElementById("Topbar").children[1].innerHTML = tDate
})