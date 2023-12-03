const { log, error } = require('console')
const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require("dotenv").config();

router.post('/signup', async (req, res) => {
    console.log(" Entering Sign up with Req Body containing User Informations.")
    const { email, password, firstName, lastName } = req.body

    console.log(" Checking for user in database...")
    const user = await User.findOne({ email: email });
    if (user) {
        return res.status(403).json({ "message": "A user with this email already exists." })
    }

    console.log(" Adding new User ")
    const encryptPassword = await bcrypt.hash(password, 10) // await required so that its executed sequenitally 
    const newUser = await User.create({ email, password: encryptPassword, firstName, lastName });

    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({newUser}, jwtSecretKey)

    console.log(" Saving new User and returning Token ")
    newUser.save().then(function (doc) {
        let userToReturn = { ...newUser.toJSON(), token }
        delete userToReturn.password;
        return res.status(200).json(userToReturn);
    }).catch(() => {
        console.log(" Error occured " + error);
        return res.status(403).json(error);
    })
})

module.exports = router