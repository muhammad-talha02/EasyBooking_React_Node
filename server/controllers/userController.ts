import express, { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../Middlewares/catchAyncError";
import User from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
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

      const user = await User.findOne({ email });

      if (!user) {
        return next(new ErrorHandler("Email not exists", 400));
      }
      const isPasswordMatch = user.comparePassword(password);
      if (!isPasswordMatch) {
        return next(new ErrorHandler("Password Incorrect", 400));
      }

      const token = jwt.sign({ user }, process.env.SECRET_KEY as string , {
        expiresIn:"5m"
      });
      console.log(token);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ user, token: token });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

// Update User

export const updateUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;
    const id = req.params.id;
    const data = req.body;
    try {
      const checkUser = await User.findById(id);
      if (!checkUser) {
        return next(new ErrorHandler("User not found", 400));
      }

      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      );

      res.status(200).json(updatedUser);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);


// Update User

export const getUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
      const checkUser = await User.findById(id);
      if (!checkUser) {
        return next(new ErrorHandler("User not found", 400));
      }

      res.status(200).json(checkUser);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);
