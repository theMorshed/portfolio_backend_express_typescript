import express from 'express';
import { createProject, deleteProject, getAllProject, getProject, updateProject } from './project.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createProjectSchema, updateProjectSchema } from './project.validation';

const projectRouter = express.Router();

projectRouter.post('/create-project', validateRequest(createProjectSchema), createProject);
projectRouter.get('/', getAllProject);
projectRouter.get('/:projectId', getProject);
projectRouter.put('/:projectId', validateRequest(updateProjectSchema), updateProject);
projectRouter.delete('/:projectId', deleteProject);

export default projectRouter;
