/** @format */

const { User } = require("../models/index");

const UserService = {
  async getAll() {
    console.log("first");
    const users = await User.findAll();
    return users;
  },

  async getById(userId) {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  },

  async create(userData) {
    const user = await User.create(userData);
    return user;
  },

  async update(userId, userData) {
    const [updated] = await User.update(userData, {
      where: { id: userId },
    });
    if (updated === 0) {
      throw new Error("User not found");
    }
    return "User updated successfully";
  },

  async delete(userId) {
    const deleted = await User.destroy({
      where: { id: userId },
    });
    if (deleted === 0) {
      throw new Error("User not found");
    }
    return "User deleted successfully";
  },



};

module.exports = UserService;
