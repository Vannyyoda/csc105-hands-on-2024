import type { Context } from "hono";
import * as userModel from "../models/user_model.js";

type createUserBody = {
	firstName: string;
	lastName: string;
};
const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(  
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
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
};
const getUser = async (c: Context) => {
	try {
		const user = await userModel.getUser();
		return c.json({
			user: user
		})
	} catch (e) {
		return c.json({
			success: false,
				data: null,
				msg: `${e}`,
		})
	}
}

const updateUserName = async (c: Context) => {
	try {
		const idParam = c.req.query("id");
		const body = await c.req.json();
		const { firstName, lastName } = body;

		const id = parseInt(idParam);
		if (isNaN(id) || !firstName || !lastName) {
			return c.json({
				success: false,
				msg: "Missing or invalid fields",
			}, 400);
		}

		const user = await userModel.updateUserName(id, firstName, lastName);
		if (!user) {
			return c.json({
				success: false,
				msg: "User not found or update failed",
			}, 404);
		}

		return c.json({
			success: true,
			data: user,
			msg: "User updated successfully",
		});
	} catch (e) {
		return c.json({
			success: false,
			msg: `${e}`,
		}, 500);
	}
};


export { createUser, getUser,updateUserName};