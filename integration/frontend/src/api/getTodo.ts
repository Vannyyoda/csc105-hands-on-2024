import { Axios } from '../utils/axiosInstance';
import { Todo } from '../todo';
type getTodoResponse = {
    success: boolean,
    data: Todo[],
    msg: string,
}
 
const getTodoAPI = async () => {
    try {
        const response = await Axios.get<getTodoResponse>('/todo');
        return response.data
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
            msg: "Axios error!"
        }
    }
};
const testConnection = async () => {
    try {
        const data = await Axios.get('/');
        console.log(data.data);
    } catch (e) {
        console.log(`Error fetching backend server: ${e}`);
    }
};
 
export { getTodoAPI,testConnection };
 
 