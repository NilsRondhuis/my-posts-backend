const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 70,
    },
    topic: {
      type: String,
      minlength: 3,
      maxlength: 170,
    },
  },
  { versionKey: false, timestamps: true }
);

const Post = mongoose.model("post", post);

module.exports = Post;
