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

router.get("/get/mySongs", passport.authenticate('jwt', { session: false }), async (req, res) => {
    console.log("Entering all my songs ");
    const songs = await Song.find({ artist: req.user._id })
    return res.status(200).json({ data: songs });
});

router.get("/get/artist/:artistId", passport.authenticate('jwt', { session: false }), async (req, res) => {
    console.log("To fetch all songs with certain artist");
    const { artistId } = req.params;
    // Check if the user is valid
    const user = await User.findOne({ _id: artistId })
    if (!user) {
        return res.status(301).json({ err: "Artist does not exists!" });
    }
    const songs = await Song.find({ artist: artistId });
    return res.status(200).json({ data: songs });
});


router.get("/get/songName/:songName", passport.authenticate('jwt', { session: false }), async (req, res) => {
    console.log("To fetch all songs with song Name");
    const { songName } = req.params;
    console.log("Name - " + songName)
    const songs = await Song.find({ name: songName });
    return res.status(200).json({ data: songs });
});


module.exports = router