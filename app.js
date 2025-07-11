import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mediaRoutes from "./routes/mediaRoutes.js";
import connectDB from "./config/connection.js";

const app = express();

// ENV config
dotenv.config();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // To serve poster images

// Routes
app.use("/api/media", mediaRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Cineverse Backend API Running 🚀");
});

export default app;
