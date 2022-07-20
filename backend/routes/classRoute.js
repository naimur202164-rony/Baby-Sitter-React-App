const express=require('express');
const { getAllClasses, createClasses } = require('../controllers/classController');


const router=express.Router();



router.route('/classes').get(getAllClasses);
router.route('/classes/new').post(createClasses);

// router.route('/classes/new').post(createClasses);


module.exports=router