import { Router } from "express";
import { signUp, signIn, signOut } from "../controllers/auth.controller.js";

const authRouter = Router();

//PATH: /api/auth/sign-up (POST)
authRouter.post("/sign-up",signUp);//functions that we defined and export from controllers/auth.controller.js 
authRouter.post("/sign-in",signIn);
authRouter.post("/sign-out",signOut);

export default authRouter;