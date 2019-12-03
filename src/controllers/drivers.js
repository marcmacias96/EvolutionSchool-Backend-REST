import { Driver, Relief } from "../models/index";
import Car from "../models/car";

module.exports = {
  index: async (req, res, next) => {
    const drivers = await Driver.find({}).populate(dri_user);
    res.status(200).json(drivers);
  },
  getDriver: async (req, res, next) => {
    const { driverId } = req.params;
    const driver = await Driver.findById(driverId).populate(dri_user);
    res.status(200).json(driver);
  },
  newDriver: async (req, res, next) => {
    const newDriver = await new Driver(req.body).save();
    res.status(200).json(newDriver);
  },
  replaceDriver: async (req, res, next) => {
    const { driverId } = req.params;
    const upDriver = await Driver.findByIdAndUpdate(driverId, req.body);
    res.status(200).json(upDriver);
  },
  addDriverRelif: async (req, res, next) => {
    //Se agrega el relevo desde la ruta del conductor
    const { driverId } = req.params;
    const driver = await Driver.findById(driverId);
    const newRelif = await new Relief(req.body).save();
    driver.dri_reliefs.push(newRelif);
    await driver.save();
    res.status(200).json(newRelif);
  },
  getDriverRelifs: async (req, res, next) => {
    const { driverId } = req.params;
    const driver = await Driver.findById(driverId).populate(dri_reliefs);
    res.status(200).json(driver.dri_reliefs);
  },
  addDriverCars: async (req, res, next) => {
    const { driverId } = req.params;
    const driver = await Driver.findById(driverId);
    const car = await new Car(req.body).save();
    driver.dri_cars.push(car);
    await driver.save();
    res.status(200).json(car);
  },
  getDriverCars: async (req, res, next) => {
    const { driverId } = req.params;
    const driver = await Driver.findById(driverId).populate(dri_cars);
    res.status(200).json(driver.dri_cars);
  },
  getDriverRoutes: async (req, res, next) => {
    const { driverId } = req.params;
    const driver = await Driver.findById(driverId).populate(dri_routes);
    res.status(200).json(driver.dri_routes);
  }
};
