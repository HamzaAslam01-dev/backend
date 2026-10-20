const programSchema = new Schema(
  {
    name: { type: String, required: true }, // BS Computer Science
    code: { type: String, required: true, unique: true },
    department: { type: Schema.Types.ObjectId, ref: "Department", required: true },
    level: { type: String, enum: ["undergraduate", "postgraduate", "phd", "diploma"] },
    durationYears: { type: Number, required: true },
    totalSemesters: Number,
    totalCreditHours: Number,
  },
  { timestamps: true }
);