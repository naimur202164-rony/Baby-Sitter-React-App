const Teacher = require("../models/teacherModel");

// Create Teachers ---Admin
exports.createTeacher = async (req, res, next) => {
  const teacher = await Teacher.create(req.body);
  res.status(201).json({
    success: true,
    teacher,
  });
};
//Get All teachers
exports.getALlTeacher = async (req, res, next) => {
  const teacher = await Teacher.find();
  res.status(200).json({
    success: true,
    teacher,
  });
};

exports.getTeacherDetails = async (req, res, next) => {
  const teacher = await Teacher.findById(req.params.id);

  res.status(200).json({
    success: true,
    teacher,
  });
};

// get babys prodcts
exports.getAllbabys = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "server is working fine",
  });
};


// Home Page Class Contents