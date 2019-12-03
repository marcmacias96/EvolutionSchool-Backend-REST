const router = require("express-promise-router")();

import {
  index,
  newSchool,
  getSchool,
  replaceSchool,
  newSchoolRoute,
  getSchoolRoutes
} from "../controllers/schools";

router
  .route("/")
  .get(index)
  .post(newSchool);

router
  .route("/:schoolId")
  .get(getSchool)
  .put(replaceSchool);

router
  .route("/:schoolId/routes")
  .get(getSchoolRoutes)
  .post(newSchoolRoute);

module.exports = router;
