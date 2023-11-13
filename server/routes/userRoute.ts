import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/userController";
import { verifyToken, verifyUser } from "../utils/verifyToken";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/update/:id", verifyUser, updateUser);
userRouter.get("/:id", getUser);
// userRouter.post("/", updateUser);

export default userRouter;
