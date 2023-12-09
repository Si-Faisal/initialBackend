const { Schema, model } = require("mongoose");


const jwtSchema = new Schema({
    email : " string",
})

const jwtModel = model("jwt",jwtSchema);

module.export = jwtModel;