const router = require("express-promise-router")();
import {
  index,
  getCountry,
  newCountry,
  getCountryCitys,
  newCountryCity,
  replaceCountry
} from "../controllers/countrys";

router
  .route("/")
  .get(index)
  .post(newCountry);

router
  .route("/:countryId")
  .get(getCountry)
  .post(replaceCountry);

router
  .route("/:countryId/citys")
  .get(getCountryCitys)
  .post(newCountryCity);

module.exports = router;
