class Course {
  constructor(title, hours) {
    this.title = title;
    this.hours = hours;
    this.students = [];
  }
  enroll(student) {
    this.students.push(student);
  }
}

module.exports = Course;
