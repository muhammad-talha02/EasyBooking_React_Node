import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../Middlewares/catchAyncError";
import Room from "../models/room.model";

import Hotel from "../models/hotel.model";
import ErrorHandler from "../utils/ErrorHandler";

// Create Room
export const createRoom = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const hotelId = req.params.hotelId;
    const data = req.body;
    data.hotelId = hotelId;
    try {
      const newRoom = new Room(data);
      const savedRoom = await newRoom.save();
      const addRoomInHotel = await Hotel.findByIdAndUpdate(hotelId, {
        $push: { room: savedRoom._id },
        $set: { hotelId: data.hotelId },
      });
      res.status(200).json(savedRoom);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

//Update Room
export const updateRoom = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const roomId = req.params.roomId;
    const data = req.body;

    try {
      const updateRoom = await Room.findByIdAndUpdate(
        roomId,
        {
          $set: data,
        },
        { new: true }
      );
      res.status(200).json(updateRoom);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

//Delete Room
export const deleteRoom = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const roomId = req.params.roomId;
    const hotelId = req.params.hotelId;

    try {
      await Hotel.findByIdAndUpdate(hotelId, { $pull: { room: roomId } });
      await Room.findByIdAndDelete(roomId);
      res
        .status(200)
        .json({ success: true, message: "Room Deleted Successfully" });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

//Get Room
export const getRoom = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const roomId = req.params.roomId;
    try {
      const room = await Room.findById(roomId);
      res.status(200).json(room);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);

//Get All Rooms
export const getAllRooms = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const hotelId = req.params.hotelId;
    try {
      const rooms = await Room.find({ hotelId: { $all: hotelId } });
      if (rooms.length < 1) {
        return next(new ErrorHandler("No room found", 404));
      }
      res.status(200).json({ success: true, Total: rooms.length, rooms });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);
