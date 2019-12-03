import { User, Student } from "../models/index";

module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
  },
  newUser: async (req, res, next) => {
    const user = new User(req.body);
    const newUser = await user.save();
    res.status(200).json(newUser);
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
  newUserStudent: async (req, res, next) => {
    const { userId } = req.params;
    const newStudent = new Student(req.body);
    const user = await User.findById(userId);
    user.usr_students.push(newStudent);
    await user.save();
    await newStudent.save();
    res.status(200).json(newStudent);
  },
  getUserStudents: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("usr_students");

    res.status(200).json(user.usr_students);
  },
  setUserRole: async (req, res, next) => {
    const { userdId } = req.params;
    const user = await User.findById(userdId);
    const _id = req.body._id;
    user.usr_roles.push(_id);
    await user.save();
    const upUser = await User.findById(userdId).populate(usr_roles);
    res.status(200).json(upUser);
  },
  getUserRoles: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("usr_roles");
    res.status(200).json(user.usr_roles);
  },
  getUsersSolicituds: async (req, res, next) => {
    const { userId } = req.params;
    const solis = await User.findById(userId).populate("usr_solicitudes");
  }
};
