import express from "express";
import {getCategories, constructCategory, fetchCategoryById, upToDateCategory, eraseCategory} from "../controllers/categoryController.js";

    const categoryRoute = express.Router();

    categoryRoute.route("/").get(getCategories).post(constructCategory);
    categoryRoute.route("/:id").get(fetchCategoryById).put(upToDateCategory).delete(eraseCategory);

    export default categoryRoute;