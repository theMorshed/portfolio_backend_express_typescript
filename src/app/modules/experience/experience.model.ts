import mongoose from "mongoose";
import { TExperience } from "./experience.types";

const experienceSchema = new mongoose.Schema<TExperience>(
    {
        designation: {
            type: String,
            required: [true, "Designation is required"],
            trim: true,
        },
        company: {
            type: String,
            required: [true, "Company name is required"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true,
        },
        startDate: {
            type: String,
            required: [true, "Start date is required"],
        },
        endDate: {
            type: Date,
            required: false, // ✅ optional field
        },
    },
    {
        timestamps: true,
    }
);

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
