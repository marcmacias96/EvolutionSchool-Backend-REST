const router = require("express-promise-router")();

import {
  index,
  newRoute,
  replaceRoute,
  getRouteDriver,
  getRouteStudents,
  getRoute
} from "../controllers/routes";

router.route("/").get(index);
router
  .route("/:routeId")
  .get(getRoute)
  .put(replaceRoute);
router.route("/:routeId/driver").get(getRouteDriver);
router.route("/:routeId/students").get(getRouteStudents);

module.exports = router;
