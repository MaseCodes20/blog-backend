const asyncHandler = require("express-async-handler");

const cloudinaryKey = process.env.CLOUDINARY_KEY;
const cName = process.env.REACT_APP_CLOUD_NAME;

// @desx Get cloudinary
// @route Get /secreto/cloudinary
// @access Private
const getCloudinary = asyncHandler(async (req, res) => {
  try {
    const key = await fetch(cloudinaryKey);
    const keyResponse = key.json();
    const cloudName = await fetch(cName);
    const cloudNameResponse = cloudName.json();

    res.json({ key: keyResponse, cloudName: cloudNameResponse });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = { getCloudinary };
