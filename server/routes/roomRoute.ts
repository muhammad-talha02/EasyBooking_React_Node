import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/roomController";
import { verifyAdmin } from "../controllers/authController";

const roomRouter = express.Router();

roomRouter.get("/:hotelId", getAllRooms);
roomRouter.get("/room/:roomId", getRoom);
roomRouter.post("/:hotelId", verifyAdmin, createRoom);
roomRouter.put("/:roomId", verifyAdmin, updateRoom);
roomRouter.delete("/:hotelId/:roomId", verifyAdmin, deleteRoom);

export default roomRouter;
