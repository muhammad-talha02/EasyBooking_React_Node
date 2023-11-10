import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../Middlewares/catchAyncError";
import Hotel from "../models/hotel.model";
import ErrorHandler from "../utils/ErrorHandler";

export const createHotel = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newHotel = new Hotel(req.body);
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
      
    } catch (error:any) {
      next(new ErrorHandler(error.message, 404))
    }
  }
);
