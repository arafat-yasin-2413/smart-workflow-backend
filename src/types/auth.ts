import { UserRole } from "../modules/user/user.model";

export type TokenPayload = {
    userId: string;
    role: UserRole;
}