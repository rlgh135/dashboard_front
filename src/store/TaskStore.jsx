// src/store/taskStore.js
import { create } from 'zustand';

export const useTaskStore = create((set) => ({
  columns: {
    todo: [{ id: 't1', title: '프로젝트 기획' }],
    doing: [{ id: 't2', title: 'UI 디자인' }],
    done: [{ id: 't3', title: '요구사항 정리' }],
  },

  /* 이동 (컬럼 이동·정렬 모두 처리) */
  moveTask: (taskId, fromCol, toCol, toIndex) =>
    set((state) => {
      const task = state.columns[fromCol].find((t) => t.id === taskId);
      const next = { ...state.columns };
      next[fromCol] = next[fromCol].filter((t) => t.id !== taskId);
      next[toCol].splice(toIndex, 0, task);
      return { columns: next };
    }),

  /* 같은 컬럼 내 순서 변경 */
  reorderTask: (colId, oldIndex, newIndex) =>
    set((state) => {
      const next = { ...state.columns };
      const newArr = [...next[colId]];
      const [moved] = newArr.splice(oldIndex, 1);
      newArr.splice(newIndex, 0, moved);
      next[colId] = newArr;
      return { columns: next };
    }),

  /* 새 태스크 추가 */
  addTask: (colId, title) =>
    set((state) => {
      const newTask = { id: Date.now().toString(), title };
      return {
        columns: {
          ...state.columns,
          [colId]: [...state.columns[colId], newTask],
        },
      };
    }),
}));
