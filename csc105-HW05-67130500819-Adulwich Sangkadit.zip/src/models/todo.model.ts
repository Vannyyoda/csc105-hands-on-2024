import { todo } from 'node:test';
import type { CreateTodoInput, Todo, UpdateTodoInput } from '../types/index.ts';

const todos: Todo[] = [
	{ id: 1, title: 'Learn Hono', completed: false },
	{ id: 2, title: 'Build a REST API', completed: false },
	{ id: 3, title: 'Test with Postman', completed: false },
];

export function findAll(): Todo[] {
	return todos;
}

export function findById(id: number): Todo | undefined {
	// IMPLEMENT HERE
	return todos.find((todo) => todo.id === id)
}

export function create(input: CreateTodoInput): Todo {
	const newTodo: Todo = {
		id: todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
		title: input.title,
		completed: input.completed === true,
	};

	todos.push(newTodo);
	return newTodo;
}

export function update(id: number, input: Todo): Todo | undefined {
	const index = todos.findIndex((todo) => todo.id === id);

	if (index === -1) {
		return undefined;
	}

	const updatedTodo: Todo = {
		...input,
		id,
	};

	todos[index] = updatedTodo;
	return updatedTodo;
}

// Update a todo partially
export function patch(id: number, input: UpdateTodoInput): Todo | undefined {
	const index = todos.findIndex((todo) => todo.id === id);

	if (index === -1) {
		return undefined;
	}

	const updatedTodo: Todo = {
		...todos[index],
		...(input.title !== undefined && { title: input.title }),
		...(input.completed !== undefined && { completed: input.completed }),
	};

	todos[index] = updatedTodo;
	return updatedTodo;
}

export function remove(id: number): Todo | undefined {
  const index = todos.findIndex((todo) => todo.id === id)

  if(index === -1){
	return undefined;
  }
  
  const deletedTodo = todos[index];
  todos.splice(index,1);

  return deletedTodo;
}

export function findByCompleted(completed: boolean): Todo[] {
	return todos.filter((todo) => todo.completed === completed);
}

export function search(term: string): Todo[]{
	if (!term) return [];
	return 	todos.filter((todo) => 
		todo.title.toLowerCase().includes(term.toLowerCase())
		
	);
}