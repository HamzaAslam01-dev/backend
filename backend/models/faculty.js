const facultySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    employeeId: { type: String, required: true, unique: true },
    department: { type: Schema.Types.ObjectId, ref: "Department", required: true },
    designation: {
      type: String,
      enum: ["lecturer", "assistant professor", "associate professor", "professor"],
    },
    qualification: [{ degree: String, institute: String, year: Number }],
    specialization: [String],
    gender: { type: String, enum: ["male", "female", "other"] },
    dateOfBirth: Date,
    cnic: String,
    address: { street: String, city: String, province: String, country: String },
    joiningDate: Date,
    salary: Number,
    status: { type: String, enum: ["active", "on-leave", "resigned"], default: "active" },
  },
  { timestamps: true }
);