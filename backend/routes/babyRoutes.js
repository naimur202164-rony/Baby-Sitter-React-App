const express = require("express");
const { getAllbabys, createTeacher } = require("../controllers/babyControllers");

const router = express.Router();

router.route('/babys').get(getAllbabys);
router.route('/teacher/new').post(createTeacher);




module.exports=router;