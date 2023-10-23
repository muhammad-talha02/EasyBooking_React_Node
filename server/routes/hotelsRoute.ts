import express, { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

const hotelsRouter = express.Router();

// Create

hotelsRouter.post(
  "/hotel",
  (req: Request, res: Response, next: NextFunction) => {
    res.send("Hotels");
  }
);



hotelsRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hotels");
});

export default hotelsRouter;
