const jwt = require('jsonwebtoken');

const secretKey = 'asdsadasasdsa';

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
module.exports = { authenticateJWT }