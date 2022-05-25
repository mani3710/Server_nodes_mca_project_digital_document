const MARKS = "/marks";
const review = '/review';
const marksService = {
    insertReviewOneMark: `${MARKS}/create/reviewone`,
    insertReviewTwoMark: `${MARKS}/create/reviewtwo`,
    insertReviewThreeMark: `${MARKS}/create/reviewthree`,
    insertFinalReviewMark: `${MARKS}/create/finalreview`,
    getFinalMark: `${MARKS}/get/finalmark`,
    getFirstReview: `${MARKS}/get/review/first`,
    getTwoReviewMark: `${MARKS}/get/review/two`,
    getReviewThreeMark: `${MARKS}/get/review/three`,
    getFinalReviewMark: `${MARKS}/get/review/final`,
    createReviewList: `${review}/create/list`,
    createReviewTopicList: `${review}/create/topiclist`,
    createReviewMarks: `${review}/create/marks`,
    getReviewMark: `${MARKS}/getreview/marks`
}

module.exports = marksService;    