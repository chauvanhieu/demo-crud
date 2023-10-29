
const express = require("express");
const router = express.Router();
const TaskController = require("../controller/task.controller");

router.get("/", TaskController.getAll)
router.get("/:id", TaskController.getById)

router.post("/", TaskController.create)
router.put("/:id", TaskController.update)
router.delete("/:id", TaskController.delete)


module.exports = router;
