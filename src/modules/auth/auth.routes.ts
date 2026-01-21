import { Router } from "express";
import { login, regiser } from "./auth.controller";


const router = Router();

router.post("/register", regiser);
router.post("/login", login);

export const authRoutes = router;