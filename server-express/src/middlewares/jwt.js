const jwtService = require("../services/jwt.service");

function verifyTokenMiddleware(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwtService.verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: "Token is invalid" });
  }

  req.user = decoded;

  next();
}

module.exports = verifyTokenMiddleware;
