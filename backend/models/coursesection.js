const courseOfferingSchema = new Schema(
  {
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    semester: { type: Schema.Types.ObjectId, ref: "Semester", required: true },
    faculty: { type: Schema.Types.ObjectId, ref: "Faculty", required: true },
    program: { type: Schema.Types.ObjectId, ref: "Program" },
    section: { type: String, default: "A" },
    capacity: { type: Number, default: 40 },
    enrolledCount: { type: Number, default: 0 },
    room: String,
  },
  { timestamps: true }
);
courseOfferingSchema.index({ course: 1, semester: 1, section: 1 }, { unique: true });