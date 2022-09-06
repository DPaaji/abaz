import express, { Router } from "express";
import { getUsers, makeUser, fetchUserById, userUpdate, userDelete } from "../controllers/userController.js";

    const userRoute = express.Router();

    userRoute.route("/").get(getUsers).post(makeUser);
    userRoute.route("/:id").get(fetchUserById).put(userUpdate).delete(userDelete);

    export default userRoute;