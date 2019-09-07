class Gradebook {
  constructor(instructor, courseObject) {
    this.instructor = instructor;
    this.course = courseObject;
  }
  calcClassAverage() {
    //loop over bio.students.scores, add them together and divide by the array length.  Still haven't worked this out.
  }
  listPassingStudents() {
    
  }
}
module.exports = Gradebook;

//I can see that this.course should be an instatiated object of Class 'Course'. The bio argument could be written as {title: "Bio", hours: 3}
