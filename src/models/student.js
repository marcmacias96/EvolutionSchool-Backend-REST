import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
  stu_names: {
    type: String,
    required: true
  },
  stu_lastNames: {
    type: String,
    required: true
  },
  stu_avatar: {
    type: String,
    required: false
  },
  stu_personalID: {
    type: Number,
    required: true
  },
  stu_absences: [
    {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "absence"
    }
  ],
  stu_location: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "location"
  },
  stu_school: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "school"
  },
  stu_route: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "route"
  }
});
const Student = model("student", StudentSchema);
export default Student;
