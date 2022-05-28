const STAFF = "/staff";

const admin = {
    createStaff: `${STAFF}/createStaff`,
    getAllStaff: `${STAFF}/getall`,
    signStaff: `${STAFF}/sign`,
    getProjectList: `${STAFF}/get/project`,
    getProjectBatchStudent: `${STAFF}/get/project/student`,
    getProjectReviewList: `${STAFF}/get/review`,
    getReviewTopicList: `${STAFF}/get/review/topic`
}

module.exports = admin;  