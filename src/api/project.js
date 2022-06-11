const PROJECT = "/project";

const projectService = {
    uploadProjectDetails: `${PROJECT}/create/upload`,
    getProjectList: `${PROJECT}/get`,
    getProjectForFeed: `${PROJECT}/get/feed`,
    getProjectDetailsData: `${PROJECT}/get/details`,
    projectSearchByTitle: `${PROJECT}/search/bytitle`,
    projectSearchByDomain: `${PROJECT}/search/bydomain`,
    projectSearchByYear: `${PROJECT}/search/byyear`
}

module.exports = projectService;   