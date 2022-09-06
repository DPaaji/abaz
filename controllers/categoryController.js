import {getAllCategories, createCategory, getCategoryById, updateCategory, deleteCategory} from "../services/categoryService.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.json({data: categories, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const constructCategory = async (req, res) => {
    try {
        const category = await createCategory(req.body);
        res.json({data: category, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const fetchCategoryById = async (req, res) => {
    try {
        const category = await getCategoryById(req.params.id);
        res.json({data: category, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const upToDateCategory = async (req, res) => {
    try {
        const category = await updateCategory(req.params.id, req.body);
        res.json({data: category, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const eraseCategory = async (req, res) => {
    try {
        const category = await deleteCategory(req.params.id);
        res.json({data: category, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};