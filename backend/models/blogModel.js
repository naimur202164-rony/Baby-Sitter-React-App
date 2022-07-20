const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema({
  image: {
    type: String,
    required: [true, "plesse Enter the Image"],
  },
  name: {
    type: String,
    required: [true, "Please Enter the Name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter the Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the Price"],
  },
});
module.exports = mongoose.model("Blogs", blogsSchema);
