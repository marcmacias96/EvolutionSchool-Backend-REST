import { School, Route } from "../models/index";

module.exports = {
  index: async (req, res, next) => {
    const schools = await School.find({});
    res.status(200).json(schools);
  },
  newSchool: async (req, res, next) => {
    const newSchool = await new School(req.body).save();
    res.status(200).json(newSchool);
  },
  getSchool: async (req, res, next) => {
    const { schoolId } = req.params;
    const school = await School.findById(schoolId).populate(
      "sch_location",
      "sch_user",
      "sch_routes"
    );
    res.status(200).json(school);
  },
  replaceSchool: async (req, res, next) => {
    const { schoolId } = req.params;
    const upSchool = await School.findByIdAndUpdate(schoolId, req.body);
    res.status(200).json(upSchool);
  },
  newSchoolRoute: async (req, res, next) => {
    const { schoolId } = req.params;
    const newRoute = await new Route(req.body).save();
    const school = await School.findById(schoolId);
    school.sch_routes.push(newRoute);
    await school.save();
    res.status(200).json(newRoute);
  },
  getSchoolRoutes: async (req, res, next) => {
    const { schoolId } = req.params;
    const school = await School.findById(schoolId).populate("sch_routes");
    res.status(200).json(school.sch_routes);
  }
};
