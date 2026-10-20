const noticeSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    postedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    audience: [{ type: String, enum: ["all", "students", "faculty", "staff"] }],
    department: { type: Schema.Types.ObjectId, ref: "Department" }, // optional targeting
    attachments: [{ name: String, url: String }],
    priority: { type: String, enum: ["low", "normal", "high"], default: "normal" },
    expiresAt: Date,
  },
  { timestamps: true }
);