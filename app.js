import bodyParser from "body-parser";
import express, { Router } from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import router from "./routes/user.router.js";
import { Prouter } from "./routes/post.router.js";
import Srouter from "./routes/story.router.js";

const app = express();

mongoose.connect(process.env.URL).then((result) => {
    app.use(express.static("public"))
    app.use(bodyParser.json())
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser())

    app.use("/", router);
    app.use("/api", Prouter)
    app.use("/story",Srouter)

    app.listen(3000, () => {
        console.log("server started")
    })
}).catch((err) => {
    console.log(err)
    console.log("connnection  failed")
})
