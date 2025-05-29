import { create } from 'zustand';

const useViolationStore = create((set) => ({
  detail: null,
  setDetail: (data) => set({ detail: data }),
  clearDetail: () => set({ detail: null }),
}));

export default useViolationStore;
