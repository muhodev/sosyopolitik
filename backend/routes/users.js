const express = require("express");
const controller = require("../controllers/users");

const router = express.Router({ mergeParams: true });

router.route("/").get(controller.getAll);

router.route("/:userId").get(controller.getOne);

module.exports = router;
