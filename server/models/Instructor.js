const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoSchema = Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  phone: { type: String },
  gender: { type: String, enum: ['male', 'female', 'none'], default: 'none' },
  avatar: { type: String },
  created_on: { type: Date, default: Date.now },
  deleted_on: { type: Date },
  _courses: { type: [Schema.Types.ObjectId], ref: 'Courses' }
});

class InstructorClass {

  // public fields
  static publicFields() {
    return [
      'first_name',
      'last_name',
      'gender',
      'avatar',
    ]
  }

  // adds new instructor
  static async new({ first_name, last_name, email, phone, gender }) {
    return await this.updateOne({_id}, {$set: {
      first_name,
      last_name,
      email,
      phone,
      gender
    }});
  }

  // updates the avatar field of the instructor
  static async updateAvatar ({ _id, avatar }){ 
    return await this.updateOne({_id}, {$set: { avatar }});
  }
  
  // add courses for the instructor
  static async addCourse ({ _id, _courseID }) {
    // get the courses array to run some logic on it
    const _courses = await this.find({_id}).select('_courses');
    await _courses.push(_courseID);
    return await this.updateOne({_id}, {$set: { _courses }});
  }

}

mongoSchema.loadClass(InstructorClass);
const Instructor = mongoose.model('Instructor', mongoSchema);
module.exports = Instructor;