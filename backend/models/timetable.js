const timetableSchema = new Schema(
  {
    offering: { type: Schema.Types.ObjectId, ref: "CourseOffering", required: true },
    day: {
      type: String,
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      required: true,
    },
    startTime: { type: String, required: true }, // "09:00"
    endTime: { type: String, required: true }, // "10:30"
    room: String,
  },
  { timestamps: true }
);