import express from "express";
import multer from "multer";

import {
    getAllReels,
    getReelById,
    createReel,
    deleteReel,
    getReelsByUser,
    fetchAndSaveReels
} from "../controller/reelController.js";
import { auth } from "../mideleware/auth.js";
const upload = multer({ dest: "public/reel" });

auth

const rrouter = express.Router();

rrouter.get("/reels", getAllReels);

rrouter.post("/fetch-pexels", fetchAndSaveReels);



rrouter.get("/reels/:id", getReelById);

rrouter.post("/reels", auth, upload.single("videoUrl"), createReel);

rrouter.delete("/reels/:id", auth, deleteReel);

rrouter.get("/reels/user/:userId", getReelsByUser);

export default rrouter;
