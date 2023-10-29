/** @format */

const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middlewares/jwt");

const userRouter = require("../router/user.router");
const authRouter = require("../router/auth.router");
const taskRouter = require("../router/task.router");


router.use("/tasks", authenticateJWT, taskRouter);
router.use("/users", userRouter);
router.use("/login", authRouter);

module.exports = router;
