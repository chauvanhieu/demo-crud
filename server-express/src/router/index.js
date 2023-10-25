/** @format */

const express = require("express");
const router = express.Router();

const userRouter = require("../router/user.router");
const authRouter = require("../router/auth.router");
router.use("/users", userRouter);
router.use('/login', authRouter)

module.exports = router;
