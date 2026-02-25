import { createCategory, getAllCategories } from "../services/category.js";

async function createCategoryController(req, res) {
  try {
    const category = req.body;
    await createCategory(category);
    res.status(201).json({
      success: true,
      message: "Categoria Creada Correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getAllCategoriesController(req, res) {
  try {
    const categories = await getAllCategories();
    res.status(200).json({
      success: true,
      message: "Categorias obtenidas Correctamente",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export { createCategoryController, getAllCategoriesController };
