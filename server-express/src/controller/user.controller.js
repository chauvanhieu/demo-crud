/** @format */

const UserService = require("../services/user.service");

const UserController = {
  async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const userId = req.params.id;
      const user = await UserService.getById(userId);
      res.json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const userData = req.body;
      const newUser = await UserService.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const result = await UserService.update(userId, userData);
      res.json({ message: result });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const userId = req.params.id;
      const result = await UserService.delete(userId);
      res.json({ message: result });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

module.exports = UserController;
