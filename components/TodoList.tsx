'use client';
import Task from '@/components/Task';

import type { ITask } from '@/types/Task';

export default function TodoList({ tasks }: { tasks: ITask[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="w-10/12">Task</th>
            <th className="w-1/12 text-center">Completed</th>
            {/* <th className="w-1/12 text-center">Edit</th> */}
            <th className="w-1/12 text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tasks
            .filter(task => task.text)
            .map(task => (
              <Task key={task.id} task={task} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
