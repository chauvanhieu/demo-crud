/** @format */

const { generateToken } = require("../services/jwt.service");
const UserService = require("../services/user.service");

const AuthController = {
  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await UserService.login(username, password);

      const access_token = generateToken({ user });

      return res.status(200).json({ user, access_token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
};

module.exports = AuthController;
