import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import TaskCard from './TaskCard';
import { useUIStore } from '../../store/UIStore';
import TaskForm from './TaskForm';
import { useDroppable } from '@dnd-kit/core';

const TaskColumn = ({ id, title, tasks }) => {
  const { openModal } = useUIStore();
  const sortedIds = tasks.map((t) => t.id);

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button
          onClick={() => openModal({ title: `${title} - Add Task`, content: <TaskForm colId={id} /> })}
          className="text-sm text-blue-600 hover:underline"
        >
          + Add
        </button>
      </div>

      <SortableContext items={sortedIds} strategy={verticalListSortingStrategy}>
        <DroppableArea id={id}>
          {tasks.map((task) => (
            <SortableTask key={task.id} task={task} />
          ))}
        </DroppableArea>
      </SortableContext>
    </div>
  );
}

export default TaskColumn; 

/* Droppable wrapper */

function DroppableArea({ id, children }) {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className="space-y-3 min-h-[60px] bg-gray-100 p-2 rounded">
      {children}
    </div>
  );
}

/* SortableTask */
function SortableTask({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskCard task={task} />
    </div>
  );
}

