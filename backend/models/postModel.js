const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
    },
    image: {
      type: String,
    },
    content: {
      type: String,
    },
    author: {
      type: String,
    },
    comments: [
      {
        userId: { type: String, required: true },
        comment: { type: String, required: true },
      },
    ],
    likes: [
      {
        userId: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.Model("Post", postSchema);
