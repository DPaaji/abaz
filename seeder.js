import connectDB from "./config/db.js"
import CategoryModel from "./Models/categoryModel.js";
import UsersModel from "./Models/usersModel.js";

import usersData from "./seeder-data/seeder.data.js";
import CategoryData from "./seeder-data/category.data.js";


const importData = async () => {
    connectDB();
    try {
        //delete
        await UsersModel.deleteMany();
        await CategoryModel.deleteMany();

        //insert
        await UsersModel.insertMany(usersData);
        await CategoryModel.insertMany(CategoryData);

        console.log("success");
        process.exit();
    }   
        catch (err) {
            console.log(`Error: ${err.message}`);
            process.exit(1);
        }
};

const deleteData = async () => {
    connectDB();
    
    try{
        //delete data
        await UsersModel.deleteMany();
        await CategoryModel.deleteMany();

        console.log("Product Data deleted successfully");
    }   
        catch (error) {
            console.log(`Error: ${error.message}`);
            process.exit(1);
        }
};

console.log(process.argv);
if(process.argv[2] === "-D"){
    deleteData();
} else {
    importData();
};