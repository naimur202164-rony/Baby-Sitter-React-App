const express = require("express");
const {
  getAllBlogs,
  createBlogs,
  blogDetails,
  updateBlogsDetails,
} = require("../controllers/blogControler");

const router = express.Router();

router.route("/blogs").get(getAllBlogs);
router.route("/blogs/new").post(createBlogs);
router.route("/blogs/:id").get(blogDetails).put(updateBlogsDetails);

module.exports = router;
