import { Schema, model } from "mongoose";

export type UserRole = "ADMIN" | "MANAGER" | "MEMBER";

const userSchema = new Schema(
    {
        name: String,
        email: { type: String, unique: true },
        password: String,
        role: {
            type: String,
            enum: ["ADMIN", "MANAGER", "MEMBER"],
            default: "MEMBER",
        },
    },
    { timestamps: true },
);

export const User = model("User", userSchema);
