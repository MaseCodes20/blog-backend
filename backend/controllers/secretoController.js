const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");

// @desx Get cloudinary
// @route Get /secreto/cloudinary
// @access Private
const getCloudinary = asyncHandler(async (req, res) => {
  const cloudinaryKey = process.env.CLOUDINARY_KEY;
  const cName = process.env.CLOUD_NAME;

  res.json({ key: cloudinaryKey, cloudName: cName });
});

module.exports = { getCloudinary };
