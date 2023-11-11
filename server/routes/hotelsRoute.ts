import express from "express";
import { createHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/hotelsController";

const hotelsRouter = express.Router();

hotelsRouter.post("/hotel", createHotel);
hotelsRouter.put("/hotel/:id", updateHotel);
hotelsRouter.delete("/hotel/:id", deleteHotel);
hotelsRouter.get("/hotel/:id", getSingleHotel);
hotelsRouter.get("/", getAllHotels);

export default hotelsRouter;
