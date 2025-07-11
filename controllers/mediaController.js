import Media from "../model/mediaModel.js";

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
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
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
