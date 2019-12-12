const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoSchema = Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  unitCount: { type: Number, required: true },
  _instructorID: { type: Schema.Types.ObjectId, ref: 'Instructor' },
  _students: { type: [Schema.Types.ObjectId], ref: 'Student' }
});

class CourseClass {

  // adds new course
  static async new({ title, desc, unitCount }) {
    return await this.create({
      title,
      desc,
      unitCount,
    });
  }

  // add instructor for the course
  static async addInstructor({ _id, _instructorID }) {
    return await this.updateOne({_id}, {$set: { _instructorID }})
  }

  // add students to the course
  static async addStudent({ _id, _studentID }) {
    const _students = await this.find({_id}).select('_students');

    _students.push(_studentID);
    return await this.updateOne({_id}, {$set: { _students }});
  }

  

}

mongoSchema.loadClass(CourseClass);
const Course = mongoose.model('Course', mongoSchema);
module.exports = Course;