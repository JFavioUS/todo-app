import { ITask } from '@/types/Task';

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch('http://localhost:3002/tasks', { cache: 'no-store' });
  const todos = await res.json();

  return todos;
};

export const addTodo = async (task: ITask) => {
  console.log(JSON.stringify(task));

  try {
    await fetch('http://localhost:3002/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      body: JSON.stringify(task),
    });
  } catch (error) {
    throw new Error();
  }
};

export const deleteTodo = async (taskId: string) => {
  try {
    await fetch(`http://localhost:3002/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
  } catch (error) {
    throw new Error();
  }
};

export const editTodo = async (task: ITask) => {
  try {
    await fetch(`http://localhost:3002/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      body: JSON.stringify(task),
    });
  } catch (error) {
    throw new Error();
  }
};
