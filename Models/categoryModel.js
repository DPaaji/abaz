import mongoose from "mongoose";

const categoryModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 14
    },
    description: {
        type: String,
        maxLength: 2000,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usersModel",
        // required: true
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usersModel",
        // required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },

},{timestamps:{createdAt: true, updatedAt: false}
});

const CategoryModel = mongoose.model("category", categoryModel);
export default CategoryModel;