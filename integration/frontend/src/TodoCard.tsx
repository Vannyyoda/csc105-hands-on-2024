import { FC, useState } from 'react';
import { Todo } from './todo';
 
type TodoCardProps = {
    todo: Todo;
    handleEdit: (id: number, newName: string) => void;
    handleSuccess: (id: number) => void;
    handleDelete: (id: number) => void;
};
 
const TodoCard: FC<TodoCardProps> = ({ todo, handleDelete, handleEdit, handleSuccess }) => {
    const [editNewName, setEditNewName] = useState('');
    return (
        <div className='flex gap-10 bg-white rounded-2xl p-10 border-2 '>
            <h1>{todo.id}</h1>
            <h1 className='bg-amber-100'>{todo.name}</h1>
            <h1 className='bg-purple-200'>{todo.success === true ? 'DONE' : 'Not Done'}</h1>
            <div className='border-2'>
                <input
                    placeholder='Edit Todo name'
                    value={editNewName}
                    onChange={(e) => setEditNewName(e.target.value)
                    }
                />
            </div>
            <button className='border-2 bg-yellow-300'
                onClick={() => {
                    handleEdit(todo.id, editNewName);
                    setEditNewName('');
                }}
            >
                Edit Name
            </button>
            <button className='border-2 bg-green-300' onClick={() => handleSuccess(todo.id)}>Complete</button>
            <button className='border-2 bg-red-300' onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
    );
};
 
export { TodoCard };
 
 