const express = require('express')
const passport = require('passport');
const Playlist = require('../models/Playlist');
const Song = require('../models/Song');
const User = require('../models/User');
const router = express.Router()
// 1. Get Playlist by Id
// 2. Create a playlist

router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    console.log(" Create a playlist ");
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;
    if (!name || !thumbnail || !songs) {
        return res.status(301).json({ err: "Incomplete information !" });
    }
    const playListData = { name, thumbnail, songs, owner: currentUser._id, collaborators: [] }
    const createdPlaylist = await Playlist.create(playListData);
    return res.status(200).json({ data: createdPlaylist });
});

router.get("/get/playlist/:playlistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    console.log("Into get playlist by Id");
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
        return res.status(301).json({ err: "Invalid playlist Id !" });
    }
    return res.status(200).json({ data: playlist });
});


router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    console.log("Into get playlist by Artist Id");
    const artistUserId = req.params.artistId;
    // Check if the user is valid
    const user = await User.findOne({ _id: artistUserId })
    if (!user) {
        return res.status(301).json({ err: "Artist does not exists!" });
    }
    const playlist = await Playlist.find({ owner: artistUserId });
    return res.status(200).json({ data: playlist });
});

router.post("/addSong", passport.authenticate("jwt", { session: false }), async (req, res) => {
    console.log("Into Add song into a playlist");
    const currentUser = req.user;
    const { playlistId, songId } = req.body;
    console.log("User " + currentUser);    
    const playlist = await Playlist.findOne({ _id: playlistId });
    if (!playlist) {
        return res.status(301).json({ err: "Invalid playlist Id !" });
    }

    console.log("Playlist " + playlist);    

    // check if the user is the admin of this current playlist
    if (!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)) {
        return res.status(400).json({ err: "You don't own this playlist" });
    }

    const song = await Song.find({ _id: songId });
    if (!song) {
        return res.status(301).json({ err: "Invalid song Id !" });
    }
    playlist.songs.push(songId);
    await playlist.save();
    return res.status(200).json({ data: playlist });
});

module.exports = router