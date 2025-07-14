import Media from "../model/mediaModel.js";
import { sendResponse } from "../helper/sendResponse.js";
import { msg } from "../i18n/lang.js";

export const addMedia = async (req, res) => {
  try {
    // Destructure and validate required fields
    const {
      title,
      description,
      genre,
      releaseYear,
      posterUrl,
      type,
      tag,
    } = req.body;

    if (
      !title ||
      !description ||
      !genre ||
      !releaseYear ||
      !posterUrl ||
      !type
    ) {
      return sendResponse(res, false, msg.requiredField);
    }

    
   const existing = await Media.findOne({ title, releaseYear, type });
    if (existing) {
      return sendResponse(res, false, msg.duplicateMedia);
    }
   
    const newMedia = new Media({ ...req.body });
    await newMedia.save();

    res.status(201).json({
      success: true,
      message: "Media added successfully",
      data: newMedia,
    });

  } catch (error) {
    console.error("Error in addMedia:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
