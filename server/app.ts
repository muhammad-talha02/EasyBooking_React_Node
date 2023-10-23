import express, { NextFunction, Request, Response } from "express";
import userRouter from "./routes/userRoute";
import hotelsRouter from "./routes/hotelsRoute";

export const app = express();

// Middlewares

app.use(express.json());

app.get("/", (req: Request, res: Response, next:NextFunction) => {
  res.send({
    success:true,
    message:"Serevr is Working"
  });
});


app.use("/api/users", userRouter)
app.use("/api/hotels", hotelsRouter)