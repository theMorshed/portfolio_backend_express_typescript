import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createMessageSchema } from './message.validation';
import { createMessage } from './message.controller';

const router = Router();

router.post('/create-message', validateRequest(createMessageSchema), createMessage);

export const messageRoutes = router;