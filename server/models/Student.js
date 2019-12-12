const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoSchema = Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female', 'none'], default: 'none'},
  avatar: { type: String },
  created_on: { type: Date, default: Date.now },
  deleted_on: { type: Date },
  _favoritedCourses: { type: [Schema.Types.ObjectId], ref: 'Courses' },
  _ongoingCourses: { type: [Schema.Types.ObjectId], ref: 'Courses' },
  _completedCourses: { type: [Schema.Types.ObjectId], ref: 'Courses' },
});

class StudentClass {

  // public fields visible to all students
  static publicFields() {
    return [
      'first_name',
      'last_name',
      'gender',
      'avatar',
    ]
  }

  // adds new student
  static async new({ first_name, last_name, email, phone, gender }) {
    return await this.create({
      first_name,
      last_name,
      email,
      phone,
      gender
    });
  }

  // updates the avatar field of the student
  static async updateAvatar ({ _id, avatar }){ 
    return await this.updateOne({_id}, { $set: { avatar } });
  }

  static login(credentials) {
    // try nexmo authentication api
    return "User has logged in succesfully";
  }
}

mongoSchema.loadClass(StudentClass);
const Student = mongoose.model('Student', mongoSchema);
module.exports = Student;