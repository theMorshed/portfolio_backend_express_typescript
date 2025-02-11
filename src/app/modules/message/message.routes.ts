import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createMessageSchema } from './message.validation';
import { createMessage, getAllMessages } from './message.controller';

const router = Router();

router.post('/', getAllMessages);
router.post('/create-message', validateRequest(createMessageSchema), createMessage);

export const messageRoutes = router;