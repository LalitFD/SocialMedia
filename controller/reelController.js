import { Reel } from "../models/Reel.js";
import axios from "axios";
import dotenv from "dotenv";




export const fetchAndSaveReels = async (req, res) => {
  try {
    const { userId } = req.body;

    const { data } = await axios.get("https://api.pexels.com/videos/search", {
      headers: {
        Authorization: process.env.PEXELS_API_KEY,
      },
      params: {
        query: "trending",
        orientation: "portrait",
      },
    });

    const savedReels = await Promise.all(
      data.videos.map(async (video) => {
        const videoFile = video.video_files[0];

        const newReel = new Reel({
          title: `Video by ${video.user.name}`,
          description: `Duration: ${video.duration}s`,
          videoUrl: videoFile.link,
          createdBy: userId,
        });

        return await newReel.save();
      })
    );

    res.status(201).json({
      message: `${savedReels.length} reels created`,
      reels: savedReels,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


// Get all reels
export const getAllReels = async (req, res) => {
  try {
    const reels = await Reel.find()
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(reels);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getReelById = async (req, res) => {
  try {
    const reel = await Reel.findById(req.params.id)
      .populate("createdBy", "name email");

    if (!reel) {
      return res.status(404).json({ error: "Reel not found" });
    }

    res.status(200).json(reel);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};



// Mark reel as viewed
export const viewReel = async (req, res) => {
  try {
    const reel = await Reel.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate("createdBy", "name email");

    if (!reel) {
      return res.status(404).json({ error: "Reel not found" });
    }

    res.status(200).json(reel);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const createReel = async (req, res) => {
  try {
    const { title, description, videoUrl, createdBy } = req.body;

    const newReel = new Reel({
      title,
      description,
      videoUrl,
      createdBy
    });

    const savedReel = await newReel.save();
    const populatedReel = await Reel.findById(savedReel._id)
      .populate("createdBy", "name email");

    res.status(201).json(populatedReel);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


// Delete reel
export const deleteReel = async (req, res) => {
  try {
    const reel = await Reel.findByIdAndDelete(req.params.id);

    if (!reel) {
      return res.status(404).json({ error: "Reel not found" });
    }

    res.status(200).json({ message: "Reel deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


// Get reels by user
export const getReelsByUser = async (req, res) => {
  try {
    const reels = await Reel.find({ createdBy: req.params.userId })
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(reels);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
