const examSchema = new Schema(
  {
    offering: { type: Schema.Types.ObjectId, ref: "CourseOffering", required: true },
    type: { type: String, enum: ["quiz", "assignment", "midterm", "final", "project"], required: true },
    title: String,
    totalMarks: { type: Number, required: true },
    weightage: Number, // % contribution to final grade
    date: Date,
    duration: Number, // minutes
    room: String,
  },
  { timestamps: true }
);