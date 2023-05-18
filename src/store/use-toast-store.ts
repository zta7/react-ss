import { create } from 'zustand'

export const useToastStore = create((set) => ({
  toasts: []
  // bears: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 })
}))
