import type { Context } from "hono";
import * as todoModel from "../models/todo_model.js";
import { todo } from "node:test";
import { title } from "process";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const updateTodoComplete = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.updateTodoComplete(parseInt(param));
            return c.json({
                success: true,
                data: data,
                msg: "The complete has changed."
            });
        }
        return c.json({
            success: false,
            msg: "The complete cannot be changed"
        })
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
        );
    }
}

const updateTodoTitle = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (!param) {
            return c.json({
                success: false,
                msg: "Missing todo ID",
            }, 400);
        }
        const updatedTodo = await todoModel.updateTodoTitle(parseInt(param));

        return c.json({
            success: true,
            data: updatedTodo,
            msg: "Todo title updated successfully.",
        });

    } catch (e) {
        return c.json({
            success: false,
            data: null,
            msg: `${e}`,
        }, 500);
    }
}

const getTodosByUser = async (c: Context) => {
	try {
		const userIdParam = c.req.query("userId");
        if (userIdParam !== undefined && userIdParam !== null) {
            const data = await todoModel.getTodosByUserId(parseInt(userIdParam));
            return c.json({
                success: true,
                data: data,
                msg: "The complete has changed."
            });
        }

		return c.json({
			success: false,
			msg: "Todos retrieved unsuccessfully.",
		});
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		}, 500);
	}
};



export { createTodo , getTodo, updateTodoComplete, updateTodoTitle, getTodosByUser};