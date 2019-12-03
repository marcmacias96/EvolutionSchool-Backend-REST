import { City, Country } from "../models/index";

module.exports = {
  index: async (req, res, next) => {
    const countrys = await Country.find({});
    res.status(200).json(countrys);
  },
  getCountry: async (req, res, next) => {
    const { countryId } = req.params;
    const country = await Country.findById(countryId);
    res.status(200).json(country);
  },
  replaceCountry: async (req, res, next) => {
    const { countryId } = req.params;
    const newCountry = req.body;
    const upCountry = await Country.findByIdAndUpdate(countryId, newCountry);
    res.status(200).json(upCountry);
  },
  newCountry: async (req, res, next) => {
    const newCountry = await new Country(req.body).save();
    res.status(200).json(newCountry);
  },
  getCountryCitys: async (req, res, next) => {
    const { countryId } = req.params;
    const country = await Country.findById(countryId).populate("cou_cities");
    res.status(200).json(country.cou_cities);
  },
  newCountryCity: async (req, res, next) => {
    const { countryId } = req.params;
    const country = await Country.findById(countryId);
    const newCity = await new City(req.body).save();
    country.cou_cities.push(newCity);
    await country.save();
    res.status(200).json(newCity);
  }
};
