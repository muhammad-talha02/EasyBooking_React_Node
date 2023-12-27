import express from "express";
import {
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getAllHotelsByCity,
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
hotelsRouter.get("/countByCity", getAllHotelsByCity);
hotelsRouter.get("/countByType", countByType);
hotelsRouter.get("/room/:id", countByType);

export default hotelsRouter;
