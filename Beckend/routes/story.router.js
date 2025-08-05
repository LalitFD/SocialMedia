import express from "express";
import multer from "multer";
import { auth } from "../mideleware/auth.js";
import { getAllStories, getStoryById, createStory, deleteStory, getStoriesByUser } from "../controller/storyController.js";



const Srouter = express.Router();
const upload = multer({ dest: "public/story" });

Srouter.get("/stories", getAllStories);
Srouter.get("/stories/:id", getStoryById);
Srouter.post("/create", auth, upload.single("media"), createStory);
Srouter.delete("/stories/:id", auth, deleteStory);
Srouter.get("/stories/user/:id", getStoriesByUser);

export default Srouter;
