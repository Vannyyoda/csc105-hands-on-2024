export type Todo = {
    id: number,
    title: String,
    completed: boolean,
  };
  
  export type CreateTodoInput = {
      title: string;
      completed?: boolean;
  };
  
  export type UpdateTodoInput = {
      title?: string;
      completed?: boolean;
  };