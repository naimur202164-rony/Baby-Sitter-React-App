const express = require("express");
const { getAllbabys } = require("../controllers/babyControllers");

const router = express.Router();

router.route('/babys').get(getAllbabys);





module.exports=router;