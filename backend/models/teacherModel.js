const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Eneter Product"],
  },
  title: {
    type: String,
    required: [true, "Please Enter the title"],
  },
  description: {
    type: String,
    required: [true, "Please Enter the Description"],
  },
  images: {
    type: String,
    required: [true, "Please Enter the image Url"],
  },
});
module.exports = mongoose.model("Teacher", teacherSchema);
