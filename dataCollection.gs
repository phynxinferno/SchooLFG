//Uses Classroom & Drive API, make sure to add them in "services"
function shareClassData() {
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
}
