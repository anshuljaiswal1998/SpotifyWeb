const express = require('express')
const User = require('../models/User')
const passport = require('passport')
const Song = require('../models/Song')
const router = express.Router()

router.post("/upload", passport.authenticate('jwt', { session: false }), async (req, res) => {
    console.log("Inside the function!")
    let { name, thumbnail, track } = req.body;
    if (track == null || name == null) {
        return res.status(301).json({ "message": "Error in info, No Song uploaded!" });
    }
    console.log(req.user)
    let song = await Song.create({ name, thumbnail, track, artist: req.user._id })
    return res.status(200).json({ "message": "Song Uploaded !" })
})

module.exports = router