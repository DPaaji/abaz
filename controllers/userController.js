import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from "../services/UserService.js"

export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json({data: users, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }    
};

export const makeUser = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.json({data: user, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const fetchUserById = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        res.json({data: user, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const userUpdate = async (req, res) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        res.json({data: user, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

export const userDelete = async (req, res) => {
    try {
        const user = await deleteUser(req.params.id); 
        res.json ({data: user, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};