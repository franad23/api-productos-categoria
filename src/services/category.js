import Category from '../models/category.js'

async function createCategory(category) {
    await Category.create(category);
}

async function getAllCategorys() {
    return await Category.find({
        active: true,
        deleted: false,
    });
}

async function getCategoryById(id) {
    return await Category.findById(id, {
        active: true,
        deleted: false,
    })
}

async function deleteCategory(id) {
    await Category.findByIdAndUpdate(id, {deleted: true});
}

async function updateCategory(id, category) {
    await Category.findByIdAndUpdate(id, category);
}

export {
    createCategory,
    getAllCategorys,
    getCategoryById,
    deleteCategory,
    updateCategory
}