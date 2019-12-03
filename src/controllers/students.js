import { Student, Absence } from "../models/index";

module.exports = {
  index: async (req, res, next) => {
    const students = await Student.find({});
    res.status(200).json(students);
  },
  getStudent: async (req, res, next) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate(
      "stu_absences",
      "stu_location",
      "stu_school",
      "stu_route"
    );
    res.status(200).json(student);
  },
  replaceStudent: async (req, res, next) => {
    const { studentId } = req.params;
    const newStudent = req.body;
    const upStudent = await Student.findByIdAndUpdate(studentId, newStudent);
    res.status(200).json(upStudent);
  },
  getStudentAbsences: async (req, res, next) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate("stu_absences");
    res.status(200).json(student.stu_absences);
  },
  getStudentLocation: async (req, res, next) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate("stu_location");
    res.status(200).json(student.stu_location);
  },
  getStudentSchool: async (req, res, next) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate("stu_school");
    res.status(200).json(student.stu_school);
  },
  getStudentRoute: async (req, res, next) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId).populate("stu_route");
    res.status(200).json(student.stu_route);
  },
  newStudentAbsence: async (req, res, next) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    const newAbsence = await new Absence(req.body).save();
    await student.stu_absences.push(newAbsence).save();
    res.status(200).json(newAbsence);
  },
  setStudentLocation: async (req, res, next) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    student.stu_location = req.body._id;
    await student.save();
    res.status(200).json(student);
  },
  setStudentSchool: async (req, res, next) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    student.stu_school = req.body._id;
    await student.save();
    res.status(200).json(student);
  },
  setStudentRoute: async (req, res, next) => {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    student.stu_route = req.body._id;
    await student.save();
    res.status(200).json(student);
  }
};
