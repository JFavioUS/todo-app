'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { addTodo } from '@/api/todo';
import { ITask } from '@/types/Task';

export default function AddTask() {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleChange = (e: any) => {
    e.preventDefault();

    setValue(e.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const todoData: ITask = {
      id: Math.floor(Math.random() * 100) + 1 + '',
      text: value,
      completed: false,
    };
    await addTodo(todoData);

    setValue('');
    router.refresh();
  };

  return (
    <form className="bg-slate-200 p-4 rounded-md">
      <input
        onChange={handleChange}
        value={value}
        className="input w-full max-w-xs mr-2"
        placeholder="Add a new task"
        type="text"
        name="taskValue"
      />
      <button className="btn p-4" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
