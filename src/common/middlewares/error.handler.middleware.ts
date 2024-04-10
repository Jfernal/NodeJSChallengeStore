import { Request, Response, NextFunction } from "express";

interface ErrorMiddleware {
    (err: Error, req: Request, res: Response, next: NextFunction): void;
}

export const errorHandlerMiddleware: ErrorMiddleware = (err, req, res, next) => {
    console.error(err.message, err.stack);

    res.status(500).json({
      error: "Error interno del servidor",
    });
  };

// export const errorHandlerMiddleware = (
//   error: Error,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   res.status(500).json({ message: error.message });
// };