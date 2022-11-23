const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

// @desx Get Users
// @route Get /api/v1/users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

// @desx Get User
// @route Get /api/v1/users/:userID
// @access Public
const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.userID });

    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

// @desx Update User
// @route put /api/v1/users/:userID
// @access Public
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userID);

  if (!user) {
    res.status(404);
    throw new Error("User does not exist");
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userID,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

// @desx Delete User
// @route Delete /api/v1/users/:userID
// @access Public
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userID);

  if (!user) {
    res.status(400);
    throw new Error("User does not exist");
  }

  try {
    await user.remove();

    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
