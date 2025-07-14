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

    return sendResponse(res,true,msg.success, newMedia);

  } catch (error) {
    console.error("Error in addMedia:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }


};

// Function to get all media

export const getAllMedia=async(req,res)=>{

   try{

    const media = await Media.find()
     return sendResponse(res, true, msg.success, media);

   }
  catch(error){
    console.error("Error in getAllMedia:", error.message);
    sendResponse(res, false, msg.error);
  }

};



// Function to get media by ID

export const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

    if (!media) {
      return sendResponse(res, false, msg.notFound);
    }

    return sendResponse(res, true, msg.success, media);

  } catch (error) {
    console.error("Error in getMediaById:", error.message);
    return sendError(res, error);
  }
};