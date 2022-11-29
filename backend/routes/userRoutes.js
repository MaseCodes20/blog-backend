const express = require("express");
const router = express.Router();

const {
  verifyTokenAndAuthorization,
} = require("../middlewares/authMiddleware");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.route("/").get(getAllUsers);
router
  .route("/:userID")
  .get(getUser)
  .put(verifyTokenAndAuthorization, updateUser)
  .delete(verifyTokenAndAuthorization, deleteUser);

module.exports = router;
