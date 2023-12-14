import AddTask from '@/components/AddTask';
import TodoList from '@/components/TodoList';

import { getAllTodos } from '@/api/todo';
import type { ITask } from '@/types/Task';

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main className="max-w-4xl mx-auto pt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">To Do List</h1>
        <AddTask />
      </div>
      <div>
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
