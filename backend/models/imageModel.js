const mongoose = require("mongoose");
const { Schema } = mongoose;

const imgSchema = new mongoose.Schema({
  name: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = imageModel = mongoose.model("Image", imgSchema);
