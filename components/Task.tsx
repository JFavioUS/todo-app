'use client';
import { useRouter } from 'next/navigation';

import { editTodo, deleteTodo } from '@/api/todo';

import type { ITask } from '@/types/Task';

export default function Task({ task }: { task: ITask }) {
  const router = useRouter();

  const handleEdit = async (task: ITask) => {
    await editTodo(task);

    router.refresh();
  };

  const handleDelete = async (taskId: string) => {
    await deleteTodo(taskId);

    router.refresh();
  };

  return (
    <tr key={task.id} className={task.completed ? 'opacity-50' : ''}>
      <td className="w-10/12">
        <input type="text" className="input w-full max-w-xs p-0" value={task.text} />
      </td>

      <th className="w-1/12 text-center">
        <input
          onChange={() => handleEdit({ ...task, completed: !task.completed })}
          type="checkbox"
          checked={task.completed}
          className="checkbox"
        />
      </th>
      {/* <th className="w-1/12 text-center">
                  <button className="btn btn-sm btn-square btn-outline" onClick={() => handleEdit(task)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                      <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                      <path d="M16 5l3 3" />
                    </svg>
                  </button>
                </th> */}
      <th className="w-1/12 text-center">
        <button className="btn btn-sm btn-square btn-outline btn-error" onClick={() => handleDelete(task.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-trash"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
      </th>
    </tr>
  );
}
