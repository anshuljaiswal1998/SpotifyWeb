const express = require('express')
const app = express()
const mongoose = require('mongoose');
const loginRoute = require("./routes/LoginRoute");
const { error } = require('console');
require("dotenv").config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("./models/User.js")

app.use(express.json())

mongoose.connect(
    process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("MongoDb is connected!"))
    .catch(() => {
        console.log(error)
        return error;
    });

// Added Passport for Authentication using middleware    
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


app.use('/auth', loginRoute)

app.listen(8080, () => console.log("Server is running"))