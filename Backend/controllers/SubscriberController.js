import crypto from "crypto";
import Subscriber from "../models/Subscriber.js";
import { sendMail } from "../config/email.js";

const API_BASE = process.env.API_BASE_URL || "http://localhost:4000";

export const createSubscriber = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ success: false, message: "Valid email required" });
    }

    const userEmail = email.toLowerCase().trim();
    const token = crypto.randomBytes(24).toString("hex");

    await Subscriber.findOneAndUpdate(
      { email: userEmail },
      { email: userEmail, status: "pending", token },
      { upsert: true, new: true }
    );

    // Admin Email
    await sendMail(
      "New Subscriber - JhaTech Solution",
      `<h2>New Subscriber</h2><p>${userEmail}</p>`
    );

    // Confirm Email to User
    const confirmUrl = `${API_BASE}/api/subscriber/confirm?token=${token}`;

    await sendMail(
      "Confirm your subscription - JhaTech Solution",
      `
      <h2>Thanks for subscribe JhaTech Solution 🎉</h2>
      <p>Please confirm subscription:</p>
      <a href="${confirmUrl}">Confirm Subscription</a>
      `,
      userEmail
    );

    res.json({ success: true, message: "Check your email to confirm." });

  } catch (err) {
    console.log("SUBSCRIBER ERROR:", err);
    res.status(500).json({ success: false });
  }
};

export const confirmSubscriber = async (req, res) => {
  try {
    const { token } = req.query;

    const subscriber = await Subscriber.findOne({ token });

    if (!subscriber) return res.send("Invalid or expired link");

    subscriber.status = "subscribed";
    subscriber.token = undefined;
    await subscriber.save();

    res.send("Subscription confirmed ✅");
  } catch (err) {
    res.status(500).send("Error");
  }
};

export const deleteSubscriber = async (req, res) => {
  try {
    const { email } = req.query;

    await Subscriber.deleteOne({ email: email.toLowerCase() });

    res.send("You have been unsubscribed ✅");
  } catch (err) {
    res.status(500).send("Error");
  }
};