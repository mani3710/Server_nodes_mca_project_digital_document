const STUDENT = "/student";

const student = {
    createStudent: `${STUDENT}/create`,
    getStudentList: `${STUDENT}/getall`,
    signStudent: `${STUDENT}/sign`,
    getStudentProject: `${STUDENT}/get/project`,
    getStudentProjectReviewList: `${STUDENT}/get/project/review`,
    getStudentProjectReviewMark: `${STUDENT}/get/project/review/mark`,
    insertStudentProject: `${STUDENT}/insert/project`
}

module.exports = student; 