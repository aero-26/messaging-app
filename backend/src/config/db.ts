import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export function connectDB(): void {
  try {
    if (MONGODB_URI) {
      mongoose.connect(MONGODB_URI);
    } else {
      console.error("MONGODB_URI missing");
    }
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
