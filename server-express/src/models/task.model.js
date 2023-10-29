/** @format */

const Sequelize = require("sequelize");
const sequelize = require("../configs/mysql");

const Tasks = sequelize.define(
  "Tasks",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tasks",
    timestamps: false,
  }
);

module.exports = Tasks;
