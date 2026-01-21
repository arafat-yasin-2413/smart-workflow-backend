import { Request, Response } from "express";
import { registerUser } from "./auth.service";

export const regiser = async (req: Request, res: Response) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({ message: "User registered", user });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
