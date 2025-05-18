import { useDraggable } from '@dnd-kit/core';

const TaskCard = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id: task.id });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px,0)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="p-3 bg-white rounded shadow cursor-grab"
    >
      {task.title}
    </div>
  );
}
export default TaskCard;