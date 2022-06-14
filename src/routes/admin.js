const express = require('express')
const adminRouter = express.Router();
const { adminServices } = require('../api');
const { adminController } = require('../controller');
adminRouter.post(adminServices.signIn, adminController.signIn);
adminRouter.get(adminServices.getReview, adminController.getReviewList);
adminRouter.get(adminServices.getProjectList, adminController.getProjectList);
adminRouter.get(adminServices.getProjectBatchList, adminController.getProjectBatchList);
adminRouter.post(adminServices.createBatch, adminController.createBatch);
adminRouter.post(adminServices.assignStaff, adminController.assignReviewToStaff);
adminRouter.post(adminServices.assignStudent, adminController.assignReviewToStudent);
adminRouter.post(adminServices.createProjectReview, adminController.createReviewProject);
adminRouter.get(adminServices.getProjectMembers, adminController.getProjectMember);
adminRouter.get(adminServices.getReviewList, adminController.getReviewList);
adminRouter.post(adminServices.sendNotification, adminController.sendNotification);
adminRouter.post(adminServices.sendNotificationForAllProjectMembers, adminController.sendNotificationForAllProjectMembers);

module.exports = adminRouter;       