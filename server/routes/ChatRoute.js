import express from "express";
import {
  createChat,
  findChat,
  userChats,
} from "../controllers/ChatController.js";
const router = express.Router();

router.post("/", createChat);
router.get("/:userId", userChats);
router.post("/find", findChat);

export default router;
