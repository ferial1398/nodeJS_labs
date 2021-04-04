const mongoose = require("mongoose");

const User = mongoose.model("employee", new mongoose.Schema({
    email: String,
    password: String
}))

module.exports = employee