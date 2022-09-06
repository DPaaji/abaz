import CategoryModel from "../Models/categoryModel.js";

export const getAllCategories = async () => {
    return await CategoryModel.find();
};

export const createCategory = async (category) => {
    return await CategoryModel.create(category);
};

export const getCategoryById = async (id) => {
    return await CategoryModel.findById(id);
};

export const updateCategory = async (id, category) => {
    return await CategoryModel.findByIdAndUpdate(id, category);
};

export const deleteCategory = async (id) => {
    return await CategoryModel.findByIdAndDelete(id);
};
