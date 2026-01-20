import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const signAccessToken = (payload: object) => {
    return jwt.sign(payload, env.jwtAccessSecret, { expiresIn: env.accessExpires });
};

export const signRefreshToken = (payload: object) => {
    return jwt.sign(payload, env.jwtRefreshSecret, { expiresIn: env.refreshExpires });
};
