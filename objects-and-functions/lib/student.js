class Student {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.scores = [];
    this.averageGrade = 81;
  }

  logScore(points) {
    this.scores.push(points);
    this.getAverage(this.scores);
  }

    getAverage(array) {
      this.averageGrade;
      for (var i = 0; i < array.legnth; i++) {
       this.averageGrade = (this.averageGrade + array[i])/array.length;
      }
    return this.averageGrade;

  }
}

//Sorry, I just can't get this to work without hard coding! I believe I need to get the average using a for loop to add the numbers together, and then divide by the array length.  I'm just not making the jump necessary to know where to put it in the class.  I know that the process needs to happen in the logScore function, or else in the constructor, but something just isn't working.


 module.exports = Student;
