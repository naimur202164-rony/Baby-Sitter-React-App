const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Eneter Product"],
  },
  date: {
    type: String || Number,
    required: [true, "Please Enter the Date"],
  },
  time: {
    type:String,
    required: [true, "Please Enter the Age"],
  },
  age: {
    type: Number,
    required: [true, "Please Enter the Age"],
  },

  images: {
    type: String,
    required: [true, "Please Enter the image Url"],
  },
});
module.exports = mongoose.model("Classes", classSchema);
