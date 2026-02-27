import Career from "../models/Career.js";
import cloudinary from "../config/cloudinary.js";
import { sendMail } from "../config/email.js";
import fs from "fs";

export const handleCareer = async (req, res) => {
  try {
    const {
      name,
      email,
      whatsapp,
      role,
      currentWorking,
      currentPackage,
      college,
      passout,
    } = req.body;

    const fileUpload = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: "resumes",
      resource_type: "raw",
    });

    const resumeUrl = fileUpload.secure_url;

    const fileBuffer = fs.readFileSync(req.file.path);
    const base64File = fileBuffer.toString("base64");

    await Career.create({
      name,
      email,
      whatsapp,
      role,
      currentWorking,
      currentPackage,
      college,
      passout,
      resumeUrl,
    });

    const html = `
      <h2>New Career Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>Role Applied:</strong> ${role}</p>
      <p><strong>Current Working:</strong> ${currentWorking}</p>
      <p><strong>Current Package:</strong> ${currentPackage}</p>
      <p><strong>College:</strong> ${college}</p>
      <p><strong>Passout Year:</strong> ${passout}</p>
      <p><strong>Resume URL:</strong> <a href="${resumeUrl}">Download</a></p>
    `;

    await sendMail(`New Application - ${role}`, html, [
      {
        filename: req.file.originalname,
        content: base64File,
      },
    ]);


    fs.unlinkSync(req.file.path);

    res.json({ status: "success", resumeUrl });
  } catch (err) {
    console.error("Career Error:", err);
    res.status(500).json({ error: "Server Error" });
  }
};