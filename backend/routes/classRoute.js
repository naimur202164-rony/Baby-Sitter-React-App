const express=require('express');
const { getAllClasses } = require('../controllers/classController');


const router=express.Router();



router.route('/classes').get(getAllClasses);


module.exports=router