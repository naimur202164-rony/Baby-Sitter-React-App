const express=require('express');
const { getAllBlogs } = require('../controllers/blogControler');


const router=express.Router();




router.route('/blogs').get(getAllBlogs)

module.exports=router;