const service = require("../service");

const get = async (req, res, next) => {
  try {
    const results = await service.getAllPosts();
    res.json({
      status: "success",
      code: 200,
      data: {
        posts: results,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.getPostById(id);
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: {
          post: result,
        },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${id}`,
        data: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  const { name, topic } = req.body;
  try {
    const result = await service.createPost({ name, topic });
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        post: result,
      },
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { name, topic } = req.body;
  try {
    const result = await service.updatePost(id, { name, topic });
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: {
          post: result,
        },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${id}`,
        data: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.removePost(id);
    if (result) {
      res.json({
        status: "success",
        code: 200,
        data: {
          post: result,
        },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${id}`,
        data: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
