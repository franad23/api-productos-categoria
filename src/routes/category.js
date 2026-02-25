import { Router } from "express";
import {
  createCategoryController,
  getAllCategoriesController,
} from "../controllers/category.js";

const categoryRoutes = Router();

categoryRoutes.post("/", createCategoryController);
categoryRoutes.get("/", getAllCategoriesController);

export default categoryRoutes;
