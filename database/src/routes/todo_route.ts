import { Hono } from "hono";
import * as todoController from "../controllers/todo_controller.js";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.patch("/complete", todoController.updateTodoComplete);   
todoRouter.patch("/title", todoController.updateTodoTitle);
todoRouter.get("/getTodo", todoController.getTodosByUser);
export { todoRouter };