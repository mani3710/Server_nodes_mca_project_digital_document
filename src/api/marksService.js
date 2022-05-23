const MARKS = "/marks";

const marksService = {
    insertReviewOneMark: `${MARKS}/create/reviewone`,
    insertReviewTwoMark: `${MARKS}/create/reviewtwo`,
    insertReviewThreeMark: `${MARKS}/create/reviewthree`,
    insertFinalReviewMark: `${MARKS}/create/finalreview`,
    getFinalMark: `${MARKS}/get/finalmark`,
    getFirstReview: `${MARKS}/get/review/first`,
    getTwoReviewMark: `${MARKS}/get/review/two`,
    getReviewThreeMark: `${MARKS}/get/review/three`,
    getFinalReviewMark: `${MARKS}/get/review/final`
}

module.exports = marksService;    