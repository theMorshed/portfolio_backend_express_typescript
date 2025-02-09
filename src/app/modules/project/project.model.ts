import mongoose from "mongoose";
import { TProject } from "./project.type";

const projectSchema = new mongoose.Schema<TProject>(
    {
        title: {
            type: String,
            required: [true, 'Project name is required'],
            trim: true
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            trim: true 
        },
        liveLink: {
            type: String,
            required: [true, 'Live link is required'],
            trim: true
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
            trim: true
        }
    },
    {
        timestamps: true 
    }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
