const express = require('express')
const projectRouter = express.Router();
const { projectService } = require('../api');
const { projectController } = require('../controller');

projectRouter.post(projectService.uploadProjectDetails, projectController.uploadProject);
projectRouter.get(projectService.getProjectList, projectController.getProjectByID);
projectRouter.get(projectService.getProjectForFeed, projectController.getProjectListForFeed);
projectRouter.get(projectService.getProjectDetailsData, projectController.getProjectDetailsData);
projectRouter.get(projectService.projectSearchByTitle, projectController.projectSearchByTitle);
projectRouter.get(projectService.projectSearchByDomain, projectController.projectSearchByDomain);
projectRouter.get(projectService.projectSearchByYear, projectController.projectSearchByYear);

module.exports = projectRouter;   