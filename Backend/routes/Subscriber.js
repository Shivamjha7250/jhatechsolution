import express from "express";
import {
  createSubscriber,
  confirmSubscriber,
  deleteSubscriber,
} from "../controllers/SubscriberController.js";

const router = express.Router();

router.post("/", createSubscriber);
router.get("/confirm", confirmSubscriber);
router.get("/unsubscribe", deleteSubscriber);

export default router;