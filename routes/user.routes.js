import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => res.send({ title: "create a user" }));
userRouter.put("/:id", (req, res) => res.send({ title: "update  users" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "GET all users" }));

export default userRouter;
