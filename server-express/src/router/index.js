/** @format */

const express = require("express");
const router = express.Router();
const { authenticateJWT } = require("../middlewares/jwt");

const userRouter = require("../router/user.router");
const authRouter = require("../router/auth.router");
router.use("/users", authenticateJWT, userRouter);
router.use('/login', authRouter)

module.exports = router;
