import express from "express";
import {
    getAllReels,
    getReelById,
    viewReel,
    createReel,
    deleteReel,
    getReelsByUser
} from "../controller/reelController.js";

import { auth } from "../middleware/auth.js";

const rrouter = express.Router();

rrouter.get("/reels", getAllReels);

rrouter.get("/reels/:id", getReelById);

rrouter.patch("/reels/:id/view", viewReel);

rrouter.post("/reels", auth, createReel);

rrouter.delete("/reels/:id", auth, deleteReel);

rrouter.get("/reels/user/:userId", getReelsByUser);

export default rrouter;
