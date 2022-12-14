const express = require("express");
const { getCloudinary } = require("../controllers/secretoController");
const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/cloudinary").get(verifyToken, getCloudinary);

module.exports = router;
