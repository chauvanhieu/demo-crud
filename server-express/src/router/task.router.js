/** @format */

const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");
const verifyTokenMiddleware = require("../middlewares/jwt");



module.exports = router;
