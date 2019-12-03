import { Solicitude } from "../models/index";

module.exports = {
  index: async (req, res, next) => {
    const requests = await Solicitude.find({});
    res.status(200).json(requests);
  },
  getRequest: async (req, res, next) => {
    const { requestId } = req.params;
    const request = await Solicitude.findById(requestId);
    res.status(200).json(request);
  },
  newRequest: async (req, res, next) => {
    const newRequest = await new Solicitude(req.body).save();
    res.status(200).json(newRequest);
  }
};
