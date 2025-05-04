import { db } from "../index.js";

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}
const createUser = async( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}
const getUser = async() => {
    const user = await db.user.findMany()
    return user
}

const updateUserName = async (id: number, firstName: string, lastName: string) => {
	try {
		const user = await db.user.update({
			where: { id },
			data: {
				firstName,
				lastName
			}
		});
		return user;
	} catch (error) {
		console.error("User update failed:", error);
		return null;
	}
};

export { isDuplicate,createUser, getUser, updateUserName};