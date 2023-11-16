import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../Middlewares/catchAyncError";
import ErrorHandler from "../utils/ErrorHandler";
import City from "../models/city.model";

export const createCity = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const city = req.body;
    try {
      const newCity = new City(city);
      const savedCity = await newCity.save();

      res.status(200).json(savedCity);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

export const deleteCity = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
      const savedCity = await City.findByIdAndDelete(id);

      res.status(200).json({ success: true, message: "City Deleted Success" });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);
