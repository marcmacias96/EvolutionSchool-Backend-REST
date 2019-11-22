import User from "../models/user";
import Student from "../models/student"

module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
  },
  newUser: async (req, res, next) => {
    const User = await new User(req.body).save();
    res.status(200).json(User);
  },
  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  },
  replaceUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const upUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json(upUser);
  },
  getUserStudents: async (res, req, next) => {
    const { userId } = req.params;
    const students = await User.findById(userId).populate("usr_students");
    res.status(200).json(students);
  },
  getUserRoles: async (res, req, next) => {
    const { userId } = req.params;
    const roles = await User.findById(userId).populate("usr_roles");
    res.status(200).json(roles);
  },
  getUsersSolicituds: async (res, req, next) => {
    const { userId } = req.params;
    const solis = await User.findById(userId).populate("usr_solicitudes");
  },
  newUserStudent: async (res, req, next) => {
    const {userId} = req.params
    const newStudent = new Student(req.body)
    const user = await User.findById({userId})
    user.usr_students.push(newStudent)
    await user.save()
    res.status(200).json(newStudent)
  }
};
