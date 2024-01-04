const { error } = require('console')
const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcrypt');
const getToken = require('../utils/Helper');
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

    const token = getToken(newUser);

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

router.post("/login", async (req, res) => {
    console.log(" Entering Login ")
    const { email, password } = req.body

    console.log(" Checking for user in database...")
    const user = await User.findOne({ email: email });
    if (user == null) {
        return res.status(403).json({ "message": "Invalid Credentials" })
    }

    console.log(" Checking password ")
    let response = await bcrypt.compare(password, user.password)

    if (response) {
        const token = getToken(user);
        console.log("Logging in...")
        let userToReturn = { ...user.toJSON(), token }
        delete userToReturn.password;
        delete userToReturn._id;
        delete userToReturn.__v;
        return res.status(200).json(userToReturn);
    } else {
        return res.status(403).json({ "message": "Invalid Credentials" })
    }

});

module.exports = router