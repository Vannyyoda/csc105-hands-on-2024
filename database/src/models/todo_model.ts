import { db } from "../index.js";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
        where: {
            id: id,
        },
        include: {
            user: true, 
        },
    });
    return todo;
}

//update complete according to id's parameter
const updateTodoComplete = async (id: number) => {
    try {
        const todo = await db.todo.update({
            where: { id },
            data: { completed: true },
        });
        return todo;
    } catch (error) {
        console.error("Todo not found or update failed", error);
        return null; 
    }
}

const updateTodoTitle = async( id: number) => {
    try {
        const todo = await db.todo.update({
            where: {id},
            data: {
                title: "Doraemon"
            },
        })   
        return todo;
    } catch (error) {
        console.error("Todo not found", error);
        return null;
    }
}

const getTodosByUserId = async (userId: number) => {
	try {
		const todos = await db.todo.findMany({
			where: { userId: userId},
		});
		return todos;
	} catch (error) {
		console.error("Error fetching todos for user:", error);
		return null;
	}
};



export { createTodo , getTodo, updateTodoComplete, updateTodoTitle, getTodosByUserId};