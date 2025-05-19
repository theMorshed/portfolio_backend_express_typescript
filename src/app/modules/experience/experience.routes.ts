import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createExperienceSchema, updateExperienceSchema } from './experience.validation';
import { createExperience, deleteExperience, getAllExperience, getExperience, updateExperience } from './experience.controller';

const experienceRouter = express.Router();

experienceRouter.post('/create-experience', validateRequest(createExperienceSchema), createExperience);
experienceRouter.get('/', getAllExperience);
experienceRouter.get('/:experienceId', getExperience);
experienceRouter.put('/:experienceId', validateRequest(updateExperienceSchema), updateExperience);
experienceRouter.delete('/:experienceId', deleteExperience);

export default experienceRouter;