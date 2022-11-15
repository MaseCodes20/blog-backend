const express = require("express");
const router = express.Router();

const {
  verifyTokenAndAuthorization,
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
  .delete(verifyTokenAndAuthorization, deletePost);
router.route("/find/:userID").get(getUserPosts);

module.exports = router;
