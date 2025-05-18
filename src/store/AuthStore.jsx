// src/store/authStore.js
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null, // 초기에는 로그인 안 된 상태

  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),

  isAuthenticated: () => {
    return !!useAuthStore.getState().user;
  },
}));

export default useAuthStore;
