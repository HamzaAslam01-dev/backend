const resultSchema = new Schema(
  {
    exam: { type: Schema.Types.ObjectId, ref: "Exam", required: true },
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    obtainedMarks: { type: Number, required: true },
    remarks: String,
    enteredBy: { type: Schema.Types.ObjectId, ref: "Faculty" },
  },
  { timestamps: true }
);
resultSchema.index({ exam: 1, student: 1 }, { unique: true });