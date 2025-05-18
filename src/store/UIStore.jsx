import { create } from 'zustand';

export const useUIStore = create((set) => ({
  /* Toast */
  toasts: [],
  addToast: (toast) =>
    set((state) => ({ toasts: [...state.toasts, { id: Date.now(), ...toast }] })),
  removeToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),

  /* Modal */
  modal: null, // { title, content } | null
  openModal: (payload) => set({ modal: payload }),
  closeModal: () => set({ modal: null }),
}));
