import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../Middlewares/catchAyncError";
import ErrorHandler from "../utils/ErrorHandler";

export const authencticateuser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {

        
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 404));
    }
  }
);
