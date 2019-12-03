const router = require("express-promise-router")();

import { index, getCity, replaceCity } from "../controllers/cities";

router.route("/").get(index);

router
  .route("/:cityId")
  .get(getCity)
  .post(replaceCity);

module.exports = router;
