import express from "express";
import { addMedia } from "../controllers/mediaController.js";

const router = express.Router();

// POST /api/media - Add new media item
router.post("/add", addMedia);

export default router;