const express = require("express");
const router = express.Router();

const {
  verifyTokenAndAuthorization,
  verifyToken,
} = require("../middlewares/authMiddleware");

const {
  getAllPosts,
  getPost,
  getUserPosts,
  setPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.route("/").get(getAllPosts).get(getPost).post(setPost);
router
  .route("/:postId")
  .get(getPost)
  .put(verifyTokenAndAuthorization, updatePost)
  .delete(verifyToken, deletePost);
router.route("/find/:userID").get(getUserPosts);

module.exports = router;
