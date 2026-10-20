const bookIssueSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    borrower: { type: Schema.Types.ObjectId, ref: "User", required: true }, // student or faculty
    issueDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    returnDate: Date,
    fine: { type: Number, default: 0 },
    status: { type: String, enum: ["issued", "returned", "overdue", "lost"], default: "issued" },
    issuedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);