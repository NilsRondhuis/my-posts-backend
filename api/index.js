const express = require("express");
const router = express.Router();
const ctrlTask = require("../controller");

router.get("/posts", ctrlTask.get);

router.get("/posts/:id", ctrlTask.getById);

router.post("/posts", ctrlTask.create);

router.put("/posts/:id", ctrlTask.update);

router.delete("/posts/:id", ctrlTask.remove);

module.exports = router;
