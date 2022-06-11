const PROJECT = "/project";

const projectService = {
    uploadProjectDetails: `${PROJECT}/create/upload`,
    getProjectList: `${PROJECT}/get`,
    getProjectForFeed: `${PROJECT}/get/feed`,
    getProjectDetailsData: `${PROJECT}/get/details`
}

module.exports = projectService;   