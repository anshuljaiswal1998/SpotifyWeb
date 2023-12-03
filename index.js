const express = require('express')
const app = express()
const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log("MongoDb is connected!"))
    .catch(() => console.log(err));

app.listen(8080, () => console.log("Server is running"))