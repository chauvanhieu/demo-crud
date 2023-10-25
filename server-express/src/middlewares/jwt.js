const jwt = require('jsonwebtoken');


const secretKey = 'dsadsadsadsa';

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]

    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(403).json('Không có quyền truy cập :)))');
            }
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
module.exports = { authenticateJWT }