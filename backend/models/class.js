import mongoose, { model } from "mongoose";

const classSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      default: "A",
    },
    classTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
    subjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Class = model("Class", classSchema);

export default Class;