import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createSkillSchema, updateSkillSchema } from './skills.validation';
import { createSkill, deleteSkill, getAllSkill, getSkill, updateSkill } from './skills.controller';

const skillsRouter = express.Router();

skillsRouter.post('/create-skill', validateRequest(createSkillSchema), createSkill);
skillsRouter.get('/', getAllSkill);
skillsRouter.get('/:skillId', getSkill);
skillsRouter.put('/:skillId', validateRequest(updateSkillSchema), updateSkill);
skillsRouter.delete('/:skillId', deleteSkill);

export default skillsRouter;