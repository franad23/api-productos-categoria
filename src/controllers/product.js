import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../services/product.js";

async function createProductController(req, res) {
  try {
    const product = req.body;
    await createProduct(product);
    res.status(201).json({
      success: true,
      message: "Producto Creado Correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function updateProductController(req, res) {
  try {
    const { id } = req.params;
    // Solucionar que pasa si no existe el producto
    const product = req.body;
    await updateProduct(id, product);
    res.status(200).json({
      success: true,
      message: "Producto Actualizado Correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function deleteProductController(req, res) {
  try {
    const { id } = req.params;
    // Solucionar que pasa si no existe el producto
    await deleteProduct(id);
    res.status(200).json({
      success: true,
      message: "Producto Eliminado Correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getAllProductsController(req, res) {
  try {
    const products = await getAllProducts();
    res.status(200).json({
      success: true,
      message: "Productos Obtenidos Correctamente",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getProductByIdController(req, res) {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    // Solucionar que pasa si no existe el producto
    res.status(200).json({
      success: true,
      message: "Producto Obtenido Correctamente",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export {
  getAllProductsController,
  getProductByIdController,
  updateProductController,
  createProductController,
  deleteProductController,
};
