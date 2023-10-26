const jwt = require("jsonwebtoken");

const secretKey = "your-secret-key";
const tokenExpiresIn = "1h";

function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: tokenExpiresIn });
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.payload;
  } catch (error) {
    return null;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
