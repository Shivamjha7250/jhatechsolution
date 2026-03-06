import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import contactRoute from "./routes/contact.js";
import careerRoute from "./routes/career.js";
import SubscriberRoute from "./routes/Subscriber.js";

const app = express();

app.use(cors());
app.use(express.json()); 

connectDB();

app.use("/api/contact", contactRoute);
app.use("/api/career", careerRoute);
app.use("/api/subscriber", SubscriberRoute);
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));