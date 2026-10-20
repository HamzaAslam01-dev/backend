const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, unique: true },
    category: String,
    publisher: String,
    edition: String,
    totalCopies: { type: Number, default: 1 },
    availableCopies: { type: Number, default: 1 },
    shelfLocation: String,
  },
  { timestamps: true }
);