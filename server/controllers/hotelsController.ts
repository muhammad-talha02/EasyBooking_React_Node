import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../Middlewares/catchAyncError";
import Hotel from "../models/hotel.model";
import ErrorHandler from "../utils/ErrorHandler";

// Create
export const createHotel = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newHotel = new Hotel(req.body);
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

//Update

export const updateHotel = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const data = req.body;

    try {
      const updateHotel = await Hotel.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      );
      res.status(200).json(updateHotel);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

// Delete

export const deleteHotel = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
      const deleteHotel = await Hotel.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Delete Successfully" });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

// Get SIngle Hotel

export const getSingleHotel = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
      const gethotel = await Hotel.findById(id);
      res.status(200).json(gethotel);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

// Get All Hotels

export const getAllHotels = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);
// Get All Hotels by Citry

export const getAllHotelsByCity = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    let cities: any = req.query.cities;
    cities = cities.split(",");
    console.log("CItites", cities);
    try {
      const hotelsByCity = await Promise.all(
        cities.map((city: string) => {
          console.log("Getting");
          return Hotel.countDocuments({ city: city });
        })
      );

      res.status(200).json(hotelsByCity);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);
