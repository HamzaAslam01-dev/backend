const departmentSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true, uppercase: true }, // CS, EE
    description: String,
    hod: { type: Schema.Types.ObjectId, ref: "Faculty" }, // Head of Department
    establishedYear: Number,
  },
  { timestamps: true }
);