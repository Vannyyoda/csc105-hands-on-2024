import { Hono } from "hono";
import { userRouter } from "./user_route.js";
import { todoRouter } from "./todo_route.js";
const mainRouter = new Hono();

mainRouter.route("/users", userRouter);
mainRouter.route("/todos", todoRouter);
export { mainRouter };