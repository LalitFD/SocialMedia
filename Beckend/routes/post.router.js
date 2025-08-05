import express from "express";
import { getAllPosts, getPost, createPost, toggleLike, addComment } from "../controller/postController.js";

import multer from "multer";
import { auth } from "../mideleware/auth.js";
const uploads = multer({ dest: "public/post" })


const Prouter = express.Router();

Prouter.get("/getAllPost", getAllPosts);
Prouter.get("/getPost/:id", getPost);

Prouter.post("/createPost", auth, uploads.single("media"), createPost)
Prouter.put("/like/:id", auth, toggleLike)
Prouter.post("/comment/:id", auth, addComment);



export { Prouter };