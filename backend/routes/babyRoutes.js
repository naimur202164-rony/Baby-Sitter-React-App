const express = require("express");
const app = require("../app");
const {
  getAllbabys,
  createTeacher,
  getALlTeacher,
  getTeacherDetails,
} = require("../controllers/babyControllers");

const router = express.Router();

router.route("/babys").get(getAllbabys);
router.route("/teacher/new").post(createTeacher);
router.route("/teachers").get(getALlTeacher);
router.route("/teachers/:id").get(getTeacherDetails);

module.exports = router;
