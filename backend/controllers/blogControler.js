const Blogs = require("../models/blogModel");

exports.createBlogs = async (req, res, next) => {
  const blog = await Blogs.create(req.body);

  res.status(200).json({
    success:true,
    blog
  })
};

exports.getAllBlogs = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Hello From ther Blogs",
  });
};
