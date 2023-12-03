require("dotenv").config();
const jwt = require('jsonwebtoken');

const getToken = (user) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ user }, jwtSecretKey)
    return token;
};

module.exports = getToken;