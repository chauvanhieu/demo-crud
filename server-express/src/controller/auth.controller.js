const { User } = require("../models/index");

const jwt = require('jsonwebtoken');


const secretKey = 'dsadsadsadsa';

const AuthController = {
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ where: { username, password } });

            if (user) {

                const payload = { sub: user.username };
                const access_token = jwt.sign(payload, secretKey);

                return res.json({ access_token });
            } else {
                return res.status(401).json({ message: 'Đăng nhập không thành công' });
            }
        } catch (error) {
            return res.status(500).json({ message: 'Đã xảy ra lỗi' });
        }
    }


}

module.exports = AuthController