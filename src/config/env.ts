import dotenv from "dotenv";
dotenv.config();

export const env = {
    port: process.env.PORT!,
    mongodbUri: process.env.MONGODB_URI!,
    jwtAccessSecret: process.env.JWT_ACCESS_SECRET!,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET!,
    accessExpires: process.env.ACCESS_EXPIRES!,
    refreshExpires: process.env.REFRESH_EXPIRES!
};