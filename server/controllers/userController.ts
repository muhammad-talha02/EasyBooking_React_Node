import express, { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../Middlewares/catchAyncError";
import User from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import bcrypt from "bcryptjs";
// Register
export const registerUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    try {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

// Login

export const loginUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new ErrorHandler("Please Enter email and password", 400));
      }
        // const user = await User.findOne({ email });
      const user = await User.findOne({ email });
      console.log("User",user);
      if (!user) {
        return next(new ErrorHandler("Email not exists", 400));
      }
      const isPasswordMatch = await user.comparePassword(password);
      if (!isPasswordMatch) {
        return next(new ErrorHandler("Password INcorrect", 400));
      }
      res.status(200).json(user);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);
