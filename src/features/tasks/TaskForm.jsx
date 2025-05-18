// src/features/tasks/TaskForm.jsx
import { useState } from 'react';
import { useTaskStore } from '../../store/TaskStore';
import { useUIStore } from '../../store/UIStore';
import Input from '../../components/Input';
import Button from '../../components/Button';

const TaskForm = ({ colId }) => {
  const [title, setTitle] = useState('');
  const addTask = useTaskStore((s) => s.addTask);
  const { addToast, closeModal } = useUIStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(colId, title.trim());
    addToast({ message: 'Task added!', type: 'success' });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="새 태스크 입력"
      />
      <Button type="submit" className="w-full">
        Add
      </Button>
    </form>
  );
}

export default TaskForm;