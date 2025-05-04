import { Hono } from "hono";
import * as userController from "../controllers/user_controller.js";

const userRouter = new Hono();

userRouter.get("/", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.patch("/updateName", userController.updateUserName);

export { userRouter };