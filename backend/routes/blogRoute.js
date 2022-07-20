const express = require("express");
const {
  getAllBlogs,
  createBlogs,
  blogDetails,
} = require("../controllers/blogControler");

const router = express.Router();

router.route("/blogs").get(getAllBlogs);
router.route("/blogs/new").post(createBlogs);
router.route("/blogs/:id").get(blogDetails)

module.exports = router;
