import express from "express";
import { addMedia } from "../controllers/mediaController.js";
import { getAllMedia } from "../controllers/mediaController.js";
import { getMediaById } from "../controllers/mediaController.js";

const router = express.Router();

// POST /api/media - Add new media item
router.post("/add", addMedia);

// GET /api/media - Get all media items
router.get("/", getAllMedia);

// GET /api/media/:id - Get media item by ID
router.get("/:id", getMediaById);

export default router;