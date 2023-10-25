/** @format */

const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");
const verifyTokenMiddleware = require("../middlewares/jwt");

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);

router.post("/", verifyTokenMiddleware, UserController.create);
router.put("/:id", verifyTokenMiddleware, UserController.update);
router.delete("/:id", verifyTokenMiddleware, UserController.delete);

module.exports = router;
