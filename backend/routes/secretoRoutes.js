const express = require("express");
const { getCloudinary } = require("../controllers/secretoController");
const router = express.Router();

router.route("/cloudinary").get(getCloudinary);

module.exports = router;
