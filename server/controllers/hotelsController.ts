import { NextFunction, Request, Response, query } from "express";
import { catchAsyncError } from "../Middlewares/catchAyncError";
import Hotel from "../models/hotel.model";
import ErrorHandler from "../utils/ErrorHandler";
import City from "../models/city.model";
import Room from "../models/room.model";

// Create
export const createHotel = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newHotel = new Hotel(req.body);
      const savedHotel = await newHotel.save();
      const addHotelInCity = await City.findOneAndUpdate(
        { name: savedHotel.city },
        { $push: { properties: savedHotel._id } }
      );
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
      const getHotel = await Hotel.findById(id);
      const removeFromCity = await City.findOneAndUpdate(
        { name: getHotel?.city },
        {
          $pull: { properties: id },
        }
      );
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
    const { min, max, ...query } = req.query;
    const limit: any = query?.limit;
    // const maxPrice = max + 1;
    const options: any = {};
    query?.featured ? (options.featured = query?.featured) : "";
    query?.city ? (options.city = query?.city) : "";
    console.log("Options", query);
    try {
      const hotels = await Hotel.find({
        ...options,
        cheapestPrice: {
          $gte: Number(min) || 1,
          $lte: Number(max) || 100000,
        },
      }).limit(limit);
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

// Filter by property Type

export const countByType = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });

      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartment", count: apartmentCount },
        { type: "resort", count: resortCount },
        { type: "villa", count: villaCount },
        { type: "cabin", count: cabinCount },
      ]);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

// Get rooms in hotels

export const getRoomsByHotels = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.hotelId;
    try {
      const hotel = await Hotel.findById(id);
      if (hotel) {
        const rooms = await Promise.all(
          hotel.room.map((item) => {
            return Room.findById(item);
          })
        );
        return res.status(200).json({
          success: true,
          Total: rooms.length,
          rooms,
        });
      }
      return next(new ErrorHandler("No hotel found", 400));
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);
