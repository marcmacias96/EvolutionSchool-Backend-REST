import { Role } from "../models/index";

module.exports = {
  index: async (req, res, next) => {
    const roles = await Role.find({});
    res.status(200).json(roles);
  },
  getRole: async (req, res, next) => {
    const { roleId } = req.params;
    const role = await Role.findById(roleId);
    res.status(200).json(role);
  },
  newRole: async (req, res, next) => {
    const newRole = await new Role(req.body).save();
    res.status(200).json(newRole);
  },
  replaceRole: async (req, res, next) => {
    const { roleId } = req.params;
    const upRole = await Role.findByIdAndUpdate(roleId, req.body);
    res.status(200).json(upRole);
  }
};
