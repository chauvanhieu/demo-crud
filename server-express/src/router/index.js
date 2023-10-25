/** @format */

const express = require("express");
const router = express.Router();

const userRouter = require("../router/user.router");
router.use("/users", userRouter);

module.exports = router;
