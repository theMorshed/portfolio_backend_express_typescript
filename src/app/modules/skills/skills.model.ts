import mongoose from "mongoose";
import { TSkills } from "./skills.types";

const skillSchema = new mongoose.Schema<TSkills>(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
    },
    icon: {
      type: String,
      required: [true, "Icon is required"],
      trim: true,
    },
    experience: {
      type: String,
      required: false, // optional field
      trim: true,
    },
    projectsLink: {
      type: String,
      required: false, // optional field
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
