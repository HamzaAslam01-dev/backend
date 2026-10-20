const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    code: { type: String, required: true, unique: true }, // CS-101
    description: String,
    department: { type: Schema.Types.ObjectId, ref: "Department", required: true },
    creditHours: { type: Number, required: true },
    type: { type: String, enum: ["core", "elective", "lab"], default: "core" },
    prerequisites: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);