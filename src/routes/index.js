import { Router } from "express";
import userRoutes from "./users.js";
import productRoutes from "./product.js";
import categoryRoutes from "./category.js";
import imagesRoutes from "./images.js";

const router = Router();

router.use("/user", userRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/images", imagesRoutes);

export default router;
