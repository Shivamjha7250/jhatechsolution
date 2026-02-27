import dotenv from "dotenv";
dotenv.config();
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (subject, html, attachments = []) => {
  try {
    await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject,
      html,
      attachments,
    });

    return { success: true };
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return { success: false, error: error.message };
  }
};