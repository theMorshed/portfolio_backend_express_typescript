// Import necessary modules
import express, { Application, NextFunction, Request, Response } from 'express'  // Express and Application types for creating the app
import cors from 'cors';  // CORS middleware for enabling cross-origin resource sharing
import projectRouter from './app/modules/project/project.routes';  // Router for product-related routes
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import { messageRoutes } from './app/modules/message/message.routes';
import { blogRoutes } from './app/modules/blog/blog.routes';

// Initialize the Express application
const app: Application = express();

// Middleware setup
// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to allow cross-origin requests
// app.use(cors({ origin: ['https://portfoliomorshed.vercel.app'], credentials: true }));
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

// API Routes setup
// Routes for product-related operations like creating and fetching products
app.use('/api/projects', projectRouter);
app.use('/api/blogs', blogRoutes);
app.use('/api/message', messageRoutes);

// Root route that sends a simple "Hello, World!" message
app.get('/', (req, res) => {
    res.send('Portfolio backend project run successfully');
})

app.use(globalErrorHandler);
app.use(notFound);

export default app;
