const Classes = require("../models/classModel");

// Create Classes With Admin ---Admin
exports.createClasses = async (req, res, next) => {
  const newClass = await Classes.create(req.body);
  res.status(201).json({
    success: true,
    newClass,
  });
};

exports.getAllClasses = async (req, res, next) => {
  const clsss = await Classes.find();

  res.status(200).json({
    success: true,
    clsss,
  });
};
