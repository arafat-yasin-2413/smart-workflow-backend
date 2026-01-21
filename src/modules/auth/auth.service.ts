import bcrypt from "bcryptjs";
import { LoginDTO, RegisterDTO } from "./auth.types";
import { User } from "../user/user.model";
import { signAccessToken, signRefreshToken } from "../../utils/jwt";

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

export const loginUser = async (payload: LoginDTO) => {
    const user = await User.findOne({ email: payload.email });

    if (!user) {
        throw new Error("User not found");
    }

    if (!user.password) {
        throw new Error("User password not set");
    }

    const isMatch = await bcrypt.compare(payload.password, user.password);
    if (!isMatch) {
        throw new Error("Invalid Password");
    }

    const accessToken = signAccessToken({
        userId: user._id.toString(),
        role: user.role,
    });

    const refreshToken = signRefreshToken({
        userId: user._id.toString(),
        role: user.role,
    });

    return { accessToken, refreshToken };
};
