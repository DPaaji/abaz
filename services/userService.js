import UsersModel from "../Models/usersModel.js";

export const getAllUsers = async () => {
    return await UsersModel.find();
  };
   
export const createUser = async (user) => {
    return await UsersModel.create(user);
  };
  export const getUserById = async (id) => {
    return await UsersModel.findById(id);
  };
   
  export const updateUser = async (id, user) => {
    return await UsersModel.findByIdAndUpdate(id, user);
  };
   
  export const deleteUser = async (id) => {
    return await UsersModel.findByIdAndDelete(id);
  };

