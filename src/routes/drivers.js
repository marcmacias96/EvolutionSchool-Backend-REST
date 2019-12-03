const router = require("express-promise-router")();

import {
  index,
  getDriver,
  newDriver,
  replaceDriver,
  addDriverRelif,
  getDriverRelifs,
  addDriverCars,
  getDriverCars,
  getDriverRoutes
} from "../controllers/drivers";

router
  .route("/")
  .get(index)
  .post(newDriver);

router
  .route("/:driverId")
  .get(getDriver)
  .put(replaceDriver);

router
  .route("/:driverId/cars")
  .get(getDriverCars)
  .post(addDriverCars);

router
  .route("/:driverId/reliefs")
  .get(getDriverRelifs)
  .post(addDriverRelif);

router.route("/:driverId/routes").get(getDriverRoutes);

module.exports = router;
