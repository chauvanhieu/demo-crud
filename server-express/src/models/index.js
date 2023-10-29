/** @format */
const User = require("./user.model");
const Task = require("./task.model");
const mysql = require("../configs/mysql")
User.hasMany(Task, { foreignKey: "user_id" });
Task.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });



mysql.sync()
module.exports = { User, Task };
