const Post = require("./schemas/post");

const getAllPosts = () => {
  return Post.find();
};

const getPostById = (id) => {
  return Post.findOne({ _id: id });
};

const createPost = ({ name, topic }) => {
  return Post.create({ name, topic });
};

const updatePost = (id, fields) => {
  return Post.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

const removePost = (id) => {
  return Post.findByIdAndRemove({ _id: id });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  removePost,
};
