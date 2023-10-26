/** @format */

const UserService = require("../services/user.service");

const UserController = {
  async getAll(req, res) {
    try {
      const { page = 1, limit = 5, keyword } = req.query;
      const users = await UserService.getAll({ page, limit, keyword });
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getById(req, res) {
    try {
      const userId = req.params.id;
      const user = await UserService.getById(userId);
      res.json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const userData = req.body;
      const newUser = await UserService.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const result = await UserService.update(userId, userData);
      res.json({ message: result });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const userId = req.params.id;
      const { user } = req;

      if (user.id === Number(userId)) {
        throw Error("Không thể xóa tài khoản của chính bạn");
      }

      const result = await UserService.delete(userId);
      res.json({ message: result });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = UserController;
