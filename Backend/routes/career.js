import express from "express";
import multer from "multer";
import { handleCareer } from "../controllers/careerController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("resume"), handleCareer);

export default router;