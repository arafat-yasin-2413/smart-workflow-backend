import { NextFunction, Request, Response } from "express";
import { UserRole } from "../modules/user/user.model";

export const authorize =
    (...roles: UserRole[]) =>
    (req: Request, res: Response, next: NextFunction) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden for you." });
        }
        next();
    };
