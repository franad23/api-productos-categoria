import { body } from "express-validator";

const productRules = [
  body("name").notEmpty().withMessage("El nombre es requerido"),
  body("price")
    .notEmpty()
    .withMessage("El precio es requerido")
    .isNumeric()
    .withMessage("El precio debe ser un número"),
  body("stock")
    .notEmpty()
    .withMessage("El stock es requerido")
    .isNumeric()
    .withMessage("El stock debe ser un número"),
  body("active").optional().isBoolean().withMessage("Active debe ser booleano"),
  body("deleted")
    .optional()
    .isBoolean()
    .withMessage("Deleted debe ser booleano"),
  body("category")
    .notEmpty()
    .withMessage("La categoría es requerida")
    .isMongoId()
    .withMessage("La categoría debe ser un ID válido"),
  body("createdBy")
    .notEmpty()
    .withMessage("El createdBy es requerido")
    .isMongoId()
    .withMessage("El createdBy debe ser un ID válido"),
];

export { productRules };
