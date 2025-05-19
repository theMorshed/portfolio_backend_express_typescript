import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createSkillSchema, updateSkillSchema } from './skills.validation';
import { createSkill, deleteSkill, getAllSkill, getSkill, updateSkill } from './skills.controller';

const skillsRouter = express.Router();

skillsRouter.post('/create-experience', validateRequest(createSkillSchema), createSkill);
skillsRouter.get('/', getAllSkill);
skillsRouter.get('/:experienceId', getSkill);
skillsRouter.put('/:experienceId', validateRequest(updateSkillSchema), updateSkill);
skillsRouter.delete('/:experienceId', deleteSkill);

export default skillsRouter;