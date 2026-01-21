import bcrypt from "bcryptjs";
import { RegisterDTO } from "./auth.types";
import { User } from "../user/user.model";

export const registerUser = async (payload: RegisterDTO) => {
    const isExist = await User.findOne({ email: payload.email });
    if (isExist) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await User.create({
        ...payload,
        password: hashedPassword,
    });

    return user;
};
