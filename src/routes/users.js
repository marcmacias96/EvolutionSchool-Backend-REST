const router = require('express-promise-router')();

import {
  index,
  getUser,
  newUser,
  replaceUser,
  getUserStudents,
  getUserRoles,
  getUsersSolicituds
} from "../controllers/users";

router.route("/")     
  .get(index)
  .post(newUser);

router.route("/:userId")
  .get(getUser)
  .put(replaceUser);

router.route("/:userId/students")
    .get(getUserStudents);

router.route("/:userId/roles")
    .get(getUserRoles);

router.route("/:userId/solicitudes")
    .get(getUsersSolicituds);

module.exports = router;
