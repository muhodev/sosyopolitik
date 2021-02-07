const express = require("express");
const controller = require("../controllers");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(controller.getAll)
  .post(controller.create)
  .patch(controller.updateOne)
  .delete(controller.deleteOne);

router.route("/:userId").get(controller.getOne);

module.exports = router;
