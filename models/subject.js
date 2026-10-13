import mongoose, { model } from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    totalMarks: {
      type: Number,
      default: 100,
    },
  },
  {
    timestamps: true,
  }
);

const Subject = model("Subject", subjectSchema);

export default Subject;