const router = require("express-promise-router")();

import {
  index,
  getStudent,
  replaceStudent,
  getStudentAbsences,
  getStudentLocation,
  getStudentSchool,
  getStudentRoute,
  newStudentAbsence,
  setStudentLocation,
  setStudentSchool,
  setStudentRoute
} from "../controllers/students";

router.route("/").get(index);

router
  .route("/:studentId")
  .get(getStudent)
  .put(replaceStudent);

router
  .route("/:studentId/absence")
  .get(getStudentAbsences)
  .post(newStudentAbsence);

router
  .route("/:studentId/location")
  .get(getStudentLocation)
  .post(setStudentLocation);

router
  .route("/:studentId/school")
  .get(getStudentSchool)
  .post(setStudentSchool);

router
  .route("/:studentId/route")
  .get(getStudentRoute)
  .post(setStudentRoute);

module.exports = router;
