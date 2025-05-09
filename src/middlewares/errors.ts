import { Request, Response, NextFunction } from "express";

class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = async (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
    return;
  }

  console.error("Uncaught error:", err);
  res.status(500).json({
    message: "Internal server error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export const throwError = (statusCode: number, message: string) => {
  throw new AppError(statusCode, message);
};
