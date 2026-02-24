import Product from '../models/product.js'

async function createProduct(product) {
    await Product.create(product);
}

async function getAllProducts() {
    return await Product.find({
        active: true,
        deleted: false,
    });
}

async function getProductById(id) {
    return await Product.findById(id, {
        active: true,
        deleted: false,
    })
}

async function deleteProduct(id) {
    await Product.findByIdAndUpdate(id, {deleted: true});
}

async function updateProduct(id, product) {
    await Product.findByIdAndUpdate(id, product);
}

export {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct
}