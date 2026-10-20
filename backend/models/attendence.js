const attendanceSchema = new Schema(
  {
    offering: { type: Schema.Types.ObjectId, ref: "CourseOffering", required: true },
    date: { type: Date, required: true },
    markedBy: { type: Schema.Types.ObjectId, ref: "Faculty", required: true },
    records: [
      {
        student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
        status: { type: String, enum: ["present", "absent", "late", "leave"], default: "present" },
        remarks: String,
      },
    ],
  },
  { timestamps: true }
);
attendanceSchema.index({ offering: 1, date: 1 }, { unique: true });