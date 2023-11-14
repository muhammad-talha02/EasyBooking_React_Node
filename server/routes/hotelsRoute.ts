import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getSingleHotel,
  updateHotel,
} from "../controllers/hotelsController";
import { verifyAdmin } from "../controllers/authController";

const hotelsRouter = express.Router();

hotelsRouter.post("/hotel", verifyAdmin, createHotel);
hotelsRouter.put("/hotel/:id", verifyAdmin, updateHotel);
hotelsRouter.delete("/hotel/:id", verifyAdmin, deleteHotel);
hotelsRouter.get("/hotel/:id", getSingleHotel);
hotelsRouter.get("/", getAllHotels);

export default hotelsRouter;
