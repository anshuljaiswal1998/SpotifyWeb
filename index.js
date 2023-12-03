const express = require('express')
const app = express()
const mongoose = require('mongoose');
const loginRoute = require("./routes/LoginRoute");
const songRoute = require("./routes/SongRoute.js");
const { error } = require('console');
require("dotenv").config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("./models/User.js")
const passport = require('passport');
app.use(passport.initialize());

app.use(express.json())

mongoose.connect(
    process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("MongoDb is connected!"))
    .catch(() => {
        console.log(error)
        return error;
    });

// Added Passport for Authentication using middleware    
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ email: jwt_payload.user.email }).exec().then(function (user) {
        if (user) {
            done(null, user);
        } else {
            done(null, false);
            // or you could create a new account
        }
    });
}));


app.use('/auth', loginRoute)
app.use('/song', songRoute)

app.listen(8080, () => console.log("Server is running"))