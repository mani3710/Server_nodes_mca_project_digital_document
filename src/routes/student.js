const express = require('express')
const studentRouter = express.Router();
const { studentServices } = require('../api');
const { studentController } = require('../controller');

studentRouter.post(studentServices.createStudent, studentController.createStudent);
studentRouter.get(studentServices.getStudentList, studentController.getStudentDataList);
studentRouter.post(studentServices.signStudent, studentController.studentSignIn);
studentRouter.get(studentServices.getStudentProject, studentController.getStudentProjectList);
studentRouter.get(studentServices.getStudentProjectReviewList, studentController.getStudentProjectReviewList);
studentRouter.get(studentServices.getStudentProjectReviewMark, studentController.getReviewMarkForStudent);
studentRouter.post(studentServices.insertStudentProject, studentController.insertStudentProject);

module.exports = studentRouter;      