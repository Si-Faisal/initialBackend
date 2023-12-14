const mongoose = require("mongoose");


const imgSchema = new mongoose.Schema({
    imageBuffer :{ type: String, default: "" },
    fileName:{ type: String, default: "" },
    contentType :{ type: String, default: "" }
})


const ImgModel = mongoose.model("img", imgSchema)
module.exports = ImgModel;