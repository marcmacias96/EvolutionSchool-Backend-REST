const router = require("express-promise-router")();
import { index, getRole, newRole, replaceRole } from "../controllers/roles";

router
  .route("/")
  .get(index)
  .post(newRole);

router
  .route("/:roleId")
  .get(getRole)
  .post(replaceRole);

module.exports = router;
