import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../Middlewares/catchAyncError";
import ErrorHandler from "../utils/ErrorHandler";
import jwt from "jsonwebtoken";

interface verifyTokenRequest extends Request {
  user: any;
}
export const verifyUser = catchAsyncError(
  async (req: verifyTokenRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;

    if (!token) {
      console.log("Token user", token);
      return next(new ErrorHandler("Session Expired", 401));
    }
    try {
      console.log({ VerifyToken: token });

      const getUser: any = jwt.verify(token, process.env.SECRET_KEY as string);
      if (!getUser) {
        return next(new ErrorHandler("Token is not Valid", 403));
      }

      req.user = getUser.user;
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return next(new ErrorHandler("User not Valid", 400));
      }
    } catch (error) {
      return next(new ErrorHandler("JWT EROR>>>>", 400));
    }
  }
);

export const verifyAdmin = catchAsyncError(
  async (req: verifyTokenRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;

    if (!token) {
      console.log("Token user", token);
      return next(new ErrorHandler("Session Expired", 401));
    }
    try {
      console.log({ VerifyToken: token });

      const getUser: any = jwt.verify(token, process.env.SECRET_KEY as string);
      if (!getUser) {
        return next(new ErrorHandler("Token is not Valid", 403));
      }

      req.user = getUser.user;
      if (req.user.isAdmin) {
        next();
      } else {
        return next(new ErrorHandler("Hey you are not admin ok!", 400));
      }
    } catch (error) {
      return next(new ErrorHandler("JWT EROR>>>>", 400));
    }
  }
);
