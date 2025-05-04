import { useEffect, useState } from 'react';
import { TodoCard } from './TodoCard';
import {Todo} from './todo.ts';
import { getTodoAPI, testConnection} from './api/getTodo.ts';
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoName, setNewTodoName] = useState<string>('');
  
  function handleAdd() {
    fetch('http://localhost:8000/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newTodoName }), // send just the name
    })
      .then((response) => response.json())
      .then((data) => {
        setNewTodoName(data);
        handleFetchTodoData(); // refresh list
        setNewTodoName('');
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  }
  
  function handleEditName(id: number, newName: string) {
    fetch('http://localhost:8000/todo', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, name: newName }),
    })
      .then((response) => response.json())
      .then(() => handleFetchTodoData());
  }
  
  function handleSuccess(id: number) {
    fetch(`http://localhost:8000/todo/success/${id}`, {
      method: 'PATCH',
    })
      .then((response) => response.json())
      .then(() => handleFetchTodoData());
  }
  
  function handleDelete(id: number) {
    fetch(`http://localhost:8000/todo/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => handleFetchTodoData());
  }
  
  async function handleFetchTodoData() {
    const resp = await getTodoAPI();
    if(resp.success && resp.data !== null){
      setTodos(resp.data);
    }
  }
  useEffect(() => {
    handleFetchTodoData();
  }, [])
  return (
    <div onLoad={testConnection} className='w-screen h-screen bg-blue-300 flex items-center justify-center'>
      <div className='flex flex-col gap-10'>
        <div className=''>
          <input className='border-2'
            placeholder='New Todo'
            value={newTodoName}
            onChange={(e) => setNewTodoName(e.target.value)}
          />
          <button className='border-2 bg-amber-200 ml-5' onClick={handleAdd}>Add Todo</button>
        </div>
        {todos.map((todo, index: number) => (
          <TodoCard
            key={index}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEditName}
            handleSuccess={handleSuccess}
          />
        ))}
      </div>
    </div>
  );
}
 
export default App;
 
 