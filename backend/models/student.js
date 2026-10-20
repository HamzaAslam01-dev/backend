const studentSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    rollNumber: { type: String, required: true, unique: true },
    registrationNo: { type: String, unique: true },
    program: { type: Schema.Types.ObjectId, ref: "Program", required: true },
    department: { type: Schema.Types.ObjectId, ref: "Department", required: true },
    batch: String, // 2024
    currentSemester: { type: Number, default: 1 },
    section: String,
    gender: { type: String, enum: ["male", "female", "other"] },
    dateOfBirth: Date,
    cnic: String,
    bloodGroup: String,
    address: { street: String, city: String, province: String, country: String },
    guardian: { name: String, relation: String, phone: String, occupation: String },
    previousEducation: [{ degree: String, institute: String, marks: Number, year: Number }],
    admissionDate: { type: Date, default: Date.now },
    cgpa: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["active", "graduated", "suspended", "dropped", "freeze"],
      default: "active",
    },
  },
  { timestamps: true }
);