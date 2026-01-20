import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { TokenPayload } from "../types/auth";

export const signAccessToken = (payload: TokenPayload) => {
    return jwt.sign(payload, env.jwtAccessSecret, { expiresIn: env.accessExpires });
};

export const signRefreshToken = (payload: TokenPayload) => {
    return jwt.sign(payload, env.jwtRefreshSecret, { expiresIn: env.refreshExpires });
};
