import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragOverEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { useTaskStore } from '../store/TaskStore';
import TaskColumn from '../features/tasks/TaskColumn';

const TaskPage = () => {
  const { columns, moveTask, reorderTask } = useTaskStore();

  /* 컬럼 이동 or 같은 컬럼 내 정렬 처리 */
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const fromCol = findColumnId(active.id);
    const toCol = findColumnId(over.id);

    if (fromCol === toCol) {
      // 같은 컬럼: 정렬
      const oldIndex = columns[fromCol].findIndex((t) => t.id === active.id);
      const newIndex = columns[toCol].findIndex((t) => t.id === over.id);
      if (oldIndex !== newIndex) reorderTask(toCol, oldIndex, newIndex);
    } else {
      // 컬럼 변경
      const newIndex = 0;
      moveTask(active.id, fromCol, toCol, newIndex);
    }
  };

  const findColumnId = (taskId) =>
    Object.keys(columns).find((col) =>
      columns[col].some((t) => t.id === taskId)
    );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Tasks</h1>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="flex gap-4">
          {Object.entries(columns).map(([colId, tasks]) => (
            <TaskColumn
              key={colId}
              id={colId}
              title={colId.toUpperCase()}
              tasks={tasks}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default TaskPage;