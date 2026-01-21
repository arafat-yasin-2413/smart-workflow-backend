import { Request, Response } from "express";
import { loginUser, registerUser } from "./auth.service";

export const regiser = async (req: Request, res: Response) => {
    try {
        const user = await registerUser(req.body);
        return res.status(201).json({ message: "User registered", user });
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const tokens = await loginUser(req.body);
        return res.json(tokens);
    } catch (error: any) {
        return res.status(401).json({ message: error.message });
    }
};
