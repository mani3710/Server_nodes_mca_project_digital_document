const ADMIN = "/admin";

const admin = {
    getReview: `${ADMIN}/getreviewlist`,
    signIn: `${ADMIN}/signin`,
    getProjectList: `${ADMIN}/getprojectList`,
    getProjectBatchList: `${ADMIN}/getProjectBatchList`,
    createBatch: `${ADMIN}/createBatch`,
    assignStaff: `${ADMIN}/assignStaff`,
    assignStudent: `${ADMIN}/assignStudent`,
    createProjectReview: `${ADMIN}/create/projectreview`,
    getProjectMembers: `${ADMIN}/get/members`,
    getReviewList: `${ADMIN}/get/review`
}

module.exports = admin;