const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the Name"],
  },
});

module.exports = mongoose.model("Blogs", blogsSchema);
