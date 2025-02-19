import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/",getUsers);

userRouter.get("/:id",authorize,getUser); // "/:id" is dynamic paramater 

userRouter.post("/",(reg,res) => res.send({title: "CREATE new user"}));

userRouter.put("/:id",(reg,res) => res.send({title: "UPDATE user"}));

userRouter.delete("/:id",(reg,res) => res.send({title: "DELETE user"}));

export default userRouter; 