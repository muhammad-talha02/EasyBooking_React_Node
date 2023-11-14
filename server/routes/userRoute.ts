import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/userController";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getUser);
userRouter.post("/update/:id", verifyUser, updateUser);
userRouter.delete("/:id", verifyAdmin, deleteUser);
userRouter.get("/", verifyAdmin, getAllUsers);
// userRouter.post("/", updateUser);

export default userRouter;
