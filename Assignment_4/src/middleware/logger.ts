import { NextFunction, Request, Response } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
    const time = new Date().toLocaleString();
    console.log(`Time is => ${time},  Request method is => ${req.method},  Url is => ${req.originalUrl} `)
    next();
};