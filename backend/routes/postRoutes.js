const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/authMiddleware");

const {
  getAllPosts,
  getPost,
  getUserPosts,
  setPost,
  updatePost,
  deletePost,
  updateComments,
} = require("../controllers/postController");

router.route("/").get(getAllPosts).get(getPost).post(setPost);
router
  .route("/:postId")
  .get(getPost)
  .put(verifyToken, updatePost)
  .delete(verifyToken, deletePost);
router.route("/:postId/comments").put(verifyToken, updateComments);
router.route("/find/:userID").get(getUserPosts);

module.exports = router;
