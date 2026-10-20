const semesterSchema = new Schema(
  {
    name: { type: String, required: true }, // Fall 2026
    academicYear: { type: String, required: true }, // 2026-2027
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    registrationDeadline: Date,
    isCurrent: { type: Boolean, default: false },
  },
  { timestamps: true }
);