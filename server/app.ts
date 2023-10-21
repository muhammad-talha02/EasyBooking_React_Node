import express, { NextFunction, Request, Response } from "express";

export const app = express();

// Middlewares

app.use(express.json());

app.get("/", (req: Request, res: Response, next:NextFunction) => {
  res.send({
    success:true,
    message:"Serevr is Working"
  });
});
