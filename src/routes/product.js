import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
} from "../controllers/product.js";
import { productRules } from "../middlewares/register.js";
import validateRequest from "../middlewares/validator.js";
import { verifyToken } from "../middlewares/jwt.js";

const productRoutes = Router();

productRoutes.post(
  "/",
  verifyToken,
  productRules,
  validateRequest,
  createProductController,
);
productRoutes.get("/", getAllProductsController);
productRoutes.get("/:id", getProductByIdController);
productRoutes.patch("/:id",
  verifyToken,
  productRules,
  validateRequest,
  updateProductController
);
productRoutes.delete("/:id", verifyToken, deleteProductController);

export default productRoutes;
