# Morshed - Portfolio Application

A personal portfolio website built using Next.js, showcasing projects, skills, and experiences. The application uses **MongoDB**, **Express**, **Node.js**, **NextJS** and **TypeScript** to provide a complete idea about me.

## Features

- Responsive design ensuring compatibility across various devices.
- Dynamic project showcase with detailed descriptions and links.
- Blog section for sharing articles and insights.
- Contact form for direct communication.

## Technologies Used

-   **Node.js** – JavaScript runtime built on Chrome's V8 JavaScript engine.
-   **Express** – Web application framework for Node.js.
-   **MongoDB** – NoSQL database used to store products and orders.
-   **Mongoose** – ODM (Object Document Mapper) for MongoDB.
-   **TypeScript** – A superset of JavaScript that adds static types.
-   **Dotenv** – A module for loading environment variables from a `.env` file.
-   **CORS** – Middleware for enabling Cross-Origin Resource Sharing.
- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for animations.

## Requirements

Before running the project locally, make sure you have the following installed:

-   **Node.js** – Version 16.x or higher
-   **MongoDB** – Local or cloud instance (e.g., MongoDB Atlas)

## Setting Up the Project Locally

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/theMorshed/portfolio_frontend_express_typescript.git
```

### 2. Install Dependencies

Navigate to the project directory and install all required dependencies:

```bash
cd portfolio_frontend_express_typescript
npm install
```

### 3. Configure Environment Variables

Create a .env file in the root directory of the project, and set the following environment variables:

```bash
PORT=5000
DATABASE_URL=mongodb://localhost:27017/bikestore(you will get this api from mongodb atlas)
```

-   **PORT:** – The port on which the server will run.
-   **DATABASE_URL:** – Your MongoDB connection URL (can be a local MongoDB instance or a MongoDB Atlas connection string).

### 4. Run the Application

Start the development server by running the following command:

```bash
npm run start:dev
```

This will start the server on the port specified in your .env file (default: 5000).

### 5. Access the Application

Once the server is running, you can access the application API at:

```bash
http://localhost:5000
```

## 6. API Endpoints

### Project Management:

-   **POST /api/projects/create-project**: Create a new project.
-   **GET /api/projects**: Get a list of all projects. 
-   **GET /api/projects/:projectId**: Get details of a single project.
-   **PUT /api/projects/:projectId**: Update project details.
-   **DELETE /api/projects/:projectId**: Delete a project.

### Blog Management:

-   **POST /api/blogs/create-blog**: Create a new blog.
-   **GET /api/blogs**: Get a list of all blog. 
-   **GET /api/blogs/:blogId**: Get details of a single blog.
-   **PUT /api/blogs/:blogId**: Update blog details.
-   **DELETE /api/blogs/:blogId**: Delete a blog.

### Message Management:

-   **POST /api/message/create-message**: Create a new message.
-   **GET /api/message**: Get a list of all message. 

## Development & Contribution

-   Fork the repository to your own GitHub account.
-   Clone your fork to your local machine.
-   Create a new branch for your changes.
-   Make your changes and commit them.
-   Push your changes and create a pull request.

We welcome contributions and improvements! If you have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   Special thanks to [MongoDB](https://www.mongodb.com/) for providing the database solution.
-   Thank you to the developers of the libraries and tools used in this project:
    -   [Express](https://expressjs.com/) - Web framework for Node.js
    -   [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool
    -   [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a `.env` file
    -   [CORS](https://www.npmjs.com/package/cors) - Middleware to enable Cross-Origin Resource Sharing
    -   [Node.js](https://nodejs.org/en/) - JavaScript runtime
