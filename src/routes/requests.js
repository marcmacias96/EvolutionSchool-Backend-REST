const router = require("express-promise-router")();
import { index, getRequest, newRequest } from "../controllers/requests";

router
  .route("/")
  .get(index)
  .post(newRequest);

router.route("/:requestId").get(getRequest);

module.exports = router;
