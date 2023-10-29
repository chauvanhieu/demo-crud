/** @format */

const jwtService = require("../services/jwt.service");

function verifyTokenMiddleware(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Không có quyền truy cập" });
  }

  const decoded = jwtService.verifyToken(token.split(" ")[1]);

  if (!decoded) {
    return res.status(401).json({ message: "Không có quyền truy cập" });
  }

  req.user = decoded;

  next();
}

module.exports = verifyTokenMiddleware;
