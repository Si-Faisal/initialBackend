const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    gender: { type: String },
    phone: { type: String, default: "" },
    img: { type: String, default: "" },
   
});

const userModel = mongoose.model("User", UserSchema);

module.exports =  userModel;