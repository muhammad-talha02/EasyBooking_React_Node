import express, { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../Middlewares/catchAyncError";
import User from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";

export const registerUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    try {
      const newUser = new User({
        username: req.body.username,
        email: req.body.username,
        password: req.body.username,
      });
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (error:any) {
        return next(new ErrorHandler(error.message , 404))
    }
  }
);
