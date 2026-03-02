import { Router } from "express";
import { uploadImage } from "../controllers/images.js";
import { upload } from "../helpers/upload.js";
import { verifyToken } from "../middlewares/jwt.js";

const imagesRoutes = Router();

imagesRoutes.post("/upload", verifyToken, upload.single("file"), uploadImage);

export default imagesRoutes;
