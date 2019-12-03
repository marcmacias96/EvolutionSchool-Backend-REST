import { Route } from "../models/index";

module.exports = {
  index: async (req, res, next) => {
    const routes = await Route.find({});
    res.status(200).json(routes);
  },
  getRoute: async (req, res, next) => {
    const { routeId } = req.params;
    const route = await Route.findById(routeId);
    res.status(200).json(route);
  },
  replaceRoute: async (req, res, next) => {
    const { routeId } = req.params;
    const upRoute = await Route.findByIdAndUpdate(routeId, req.body);
    res.status(200).json(upRoute);
  },
  getRouteDriver: async (req, res, next) => {
    const { routeId } = req.params;
    const route = await Route.findById(routeId).populate("rou_driver");
    res.status(200).json(route.rou_driver);
  },
  getRouteStudents: async (req, res, next) => {
    const { routeId } = req.params;
    const route = await Route.findById(routeId).populate("rou_students");
    res.status(200).json(route.rou_students);
  }
};
