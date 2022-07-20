const mongoose = require("mongoose");

const classesSchema = mongoose.Schema({
  name: {
    type: String || Number,
    required: [true, "Please Enter Name"],
    trim: true,
  },
  time: {
    type: String || Number,
    required: [true, "Please Enter a Time"],
  },
  date: {
    type: String || Number,
    required: true,
  },
  age: {
    type: Number,
    required: [true, "Please Enter the Age"],
  },
});


module.exports=mongoose.model("Classes",classesSchema);