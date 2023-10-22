/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const router = require("./src/router/index");
require("./src/configs/mysql");

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
