import { sendMail } from "../config/email.js";

export const sendContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    const result = await sendMail("New Contact Form Message", html);

    if (!result.success) {
      return res.status(500).json({
        success: false,
        message: "Email could not be sent",
      });
    }

    res.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.log("CONTACT ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};