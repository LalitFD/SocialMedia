import express from "express";
import { getAllMyPosts, getPost, createPost, toggleLike, addComment } from "../controller/postController.js";

import multer from "multer";
import { auth } from "../mideleware/auth.js";
const upload = multer({ dest: "public/post" })


const Prouter = express.Router();

Prouter.get("/getAllPost", auth, getAllMyPosts);
Prouter.get("/getPost/:id", getPost);

Prouter.post("/createPost", auth, upload.single("media"), createPost)
Prouter.put("/like/:id", auth, toggleLike)
Prouter.post("/comment/:id", auth, addComment);



export { Prouter };