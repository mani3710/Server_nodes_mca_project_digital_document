const express = require('express')
const staffRouter = express.Router();
const { staffServices } = require('../api');
const { staffController } = require('../controller');

staffRouter.post(staffServices.createStaff, staffController.createStaff);
staffRouter.get(staffServices.getAllStaff, staffController.getAllStaff);
staffRouter.post(staffServices.signStaff, staffController.signIn);
staffRouter.get(staffServices.getProjectList, staffController.getProjectListByStaff);
staffRouter.get(staffServices.getProjectBatchStudent, staffController.getStaffBatchStudents);
staffRouter.get(staffServices.getProjectReviewList, staffController.getProjectReviewList);
staffRouter.get(staffServices.getReviewTopicList, staffController.getReviewTopicList);

module.exports = staffRouter; 