import express, { NextFunction, Request, Response } from "express";
// import ErrorHandler from "../utils/ErrorHandler";
import { createHotel, deleteHotel, getAllHotels, getSingleHotel, updateHotel } from "../controllers/hotelsController";

const hotelsRouter = express.Router();

// Create

hotelsRouter.post("/hotel", createHotel);
hotelsRouter.put("/hotel/:id", updateHotel);
hotelsRouter.delete("/hotel/:id", deleteHotel);
hotelsRouter.get("/hotel/:id", getSingleHotel);
hotelsRouter.get("/", getAllHotels);

// hotelsRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("Hotels");
// });

export default hotelsRouter;
