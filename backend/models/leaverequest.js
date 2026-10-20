const leaveSchema = new Schema(
  {
    applicant: { type: Schema.Types.ObjectId, ref: "User", required: true },
    applicantRole: { type: String, enum: ["student", "faculty"] },
    type: { type: String, enum: ["sick", "casual", "annual", "other"], required: true },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    reason: String,
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    reviewedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);