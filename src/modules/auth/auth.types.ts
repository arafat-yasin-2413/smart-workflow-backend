export interface RegisterDTO {
    name: string;
    email: string;
    password: string;
    role?: "ADMIN" | "MANAGER" | "MEMBER";
}


export interface LoginDTO {
    email: string;
    password: string;
}
