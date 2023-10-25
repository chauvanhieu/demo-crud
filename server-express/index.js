/** @format */

const express = require("express");
const app = express();
const port = 3000;
const router = require("./src/router/index");
const { authenticateJWT } = require("./src/middlewares/jwt");
require("./src/configs/mysql");
app.use(express.json());

app.use("/", router);
app.use(authenticateJWT)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
