const express = require('express')
const marksRouter = express.Router();
const { marksService } = require('../api');
const { marksController } = require('../controller');

marksRouter.post(marksService.insertReviewOneMark, marksController.createReviewOneMark);
marksRouter.post(marksService.insertReviewTwoMark, marksController.createReviewTwoMark);
marksRouter.post(marksService.insertReviewThreeMark, marksController.createReviewThreeMark);
marksRouter.post(marksService.insertFinalReviewMark, marksController.createFinalReviewMark);
marksRouter.get(marksService.getFinalMark, marksController.getFinalMark);
marksRouter.get(marksService.getFirstReview, marksController.getFirstReviewMarkForBatch);
marksRouter.get(marksService.getTwoReviewMark, marksController.getReviewTwoMarkForBatch);
marksRouter.get(marksService.getReviewThreeMark, marksController.getReviewThreeMarkForBatch);
marksRouter.get(marksService.getFinalReviewMark, marksController.getFinalReviewMarkForBatch);
marksRouter.post(marksService.createReviewList, marksController.createReviewList);
marksRouter.post(marksService.createReviewTopicList, marksController.createReviewTopicList);
marksRouter.post(marksService.createReviewMarks, marksController.createReviewMarks);
marksRouter.get(marksService.getReviewMark, marksController.getReviewMark);
module.exports = marksRouter;      