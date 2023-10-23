import express, { NextFunction, Request, Response } from "express";

const hotelsRouter = express.Router();

hotelsRouter.get("/", (req: Request, res: Response, next: NextFunction) => {

    res.send("Hotels")
});

export default hotelsRouter
