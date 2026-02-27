import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    position: String,
    resumeUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Career", CareerSchema);