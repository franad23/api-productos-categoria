import { Router } from "express";
import {
  createCategoryController,
  getAllCategoriesController,
} from "../controllers/category.js";
import { verifyToken } from "../middlewares/jwt.js";

const categoryRoutes = Router();

categoryRoutes.post("/", verifyToken, createCategoryController);
categoryRoutes.get("/", verifyToken, getAllCategoriesController);

export default categoryRoutes;
