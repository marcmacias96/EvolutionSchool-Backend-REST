import { City } from "../models/index";

module.exports = {
  index: async (req, res, next) => {
    const cities = await City.find({});
    res.status(200).json(cities);
  },
  getCity: async (req, res, next) => {
    const { cityId } = req.params;
    const city = await City.findById(cityId);
    res.status(200).json(city);
  },
  replaceCity: async (req, res, next) => {
    const { cityId } = req.params;
    const newCity = req.body;
    const upCity = await City.findByIdAndUpdate(cityId, oldCity);
    res.status(200).json(upCity);
  }
};
