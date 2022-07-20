const express=require('express');
const { getAllBlogs, createBlogs } = require('../controllers/blogControler');


const router=express.Router();




router.route('/blogs').get(getAllBlogs);
router.route('/blogs/new').post(createBlogs);

module.exports=router;