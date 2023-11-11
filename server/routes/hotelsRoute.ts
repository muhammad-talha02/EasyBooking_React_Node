import express, { NextFunction, Request, Response } from "express";
// import ErrorHandler from "../utils/ErrorHandler";
import { createHotel } from "../controllers/hotelsController";

const hotelsRouter = express.Router();

// Create

hotelsRouter.post("/hotel", createHotel);

// hotelsRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("Hotels");
// });

export default hotelsRouter;
