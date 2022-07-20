const Blogs = require("../models/blogModel");

exports.createBlogs = async (req, res, next) => {
  const blog = await Blogs.create(req.body);

  res.status(200).json({
    success: true,
    blog,
  });
};

//
exports.blogDetails = async (req, res) => {
  const blogDetails = await Blogs.findById(req.params.id);

  res.status(200).json({
    success: true,
    blogDetails,
  });
};

// Update
// const updateBlogsDetails = async (req, res, next) => {
//   let updateDetails = await Blogs.findById(req.params.id);
//   updateDetails = await Blogs.findByIdAndUpdate(req.params.id, req.body);
//   res.status(201).json({
//     success: true,
//     updateDetails,
//   });
// };

exports.getAllBlogs = async (req, res, next) => {
  const blogs = await Blogs.find();
  res.status(200).json({
    success: true,
    blogs,
  });
};

module.exports = updateBlogsDetails;
