const express = require('express')
const projectRouter = express.Router();
const { projectService } = require('../api');
const { projectController } = require('../controller');

projectRouter.post(projectService.uploadProjectDetails, projectController.uploadProject);
projectRouter.get(projectService.getProjectList, projectController.getProjectByID);

module.exports = projectRouter;