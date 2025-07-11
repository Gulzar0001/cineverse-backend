import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  genre: {
    type: String,
    required: true,
    trim: true
  },

  releaseYear: {
    type: Number,
    required: true
  },

  posterUrl: {
    type: String,
    required: true,
    trim: true
  },

  type: {
    type: String,
    enum: ["movie", "tv"],
    required: true
  },

  tag: {
    type: String,
    enum: ["featured", "trending", "topRated", "none"],
    default: "none"
  }

}, {
  timestamps: true
});

const Media = mongoose.model("Media", mediaSchema);

export default Media;
