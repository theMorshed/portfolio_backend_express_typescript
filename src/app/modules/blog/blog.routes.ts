import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createBlogSchema, updateBlogSchema } from './blog.validation';
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from './blog.controller';

const router = Router();

router.post('/create-blog', validateRequest(createBlogSchema), createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.put('/:id', validateRequest(updateBlogSchema), updateBlog);
router.delete('/:id', deleteBlog);

export const blogRoutes = router;