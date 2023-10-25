/** @format */

const Sequelize = require("sequelize");
const sequelize = new Sequelize("demo_express", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Kết nối database thành công");
  })
  .catch((error) => {
    console.error("Lỗi kết nối cơ sở dữ liệu:", error);
  });

module.exports = sequelize;
