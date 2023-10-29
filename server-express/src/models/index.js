/** @format */
const User = require("./user.model");
const Task = require("./task.model");

User.hasMany(Task, { foreignKey: "user_id" });
Task.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

module.exports = { User, Task };
