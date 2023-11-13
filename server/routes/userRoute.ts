import express from "express";
import { getUser, loginUser, registerUser, updateUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/update/:id", updateUser);
userRouter.get("/:id", getUser);
// userRouter.post("/", updateUser);

export default userRouter;
