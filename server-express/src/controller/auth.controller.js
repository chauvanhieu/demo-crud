const { User } = require("../models/index");

const AuthController = {

    async login(req, res) {
        const { username, password } = req.body
        console.log(req.body);

        const users = await User.getAll()
        if (users) {
            const loginSuccess = users.find((u) => u.username === username && u.password === password);
            console.log("LOGIN : " + loginSuccess);
            return users;
        }
    }


}

module.exports = AuthController