/** @format */

const { Op } = require("sequelize");
const { User } = require("../models/index");
const { generateToken } = require("./jwt.service");

const UserService = {
  async login(username, password) {
    try {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordValid = password === user.password;

      if (!isPasswordValid) {
        throw new Error("Incorrect password");
      }

      return user;
    } catch (error) {
      throw error;
    }
  },

  async getAll({ page = 1, limit = 10, keyword = "" }) {
    const offset = (page - 1) * limit;

    const whereClause = {
      fullName: {
        [Op.like]: `%${keyword}%`,
      },
    };

    const users = await User.findAndCountAll({
      where: whereClause,
      limit: Number(limit),
      offset: Number(offset),
    });

    const totalItems = users.count;
    const totalPages = Math.ceil(totalItems / limit);

    return {
      page,
      limit,
      totalPages,
      users,
    };
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
