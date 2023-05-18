import { create } from 'zustand'

type Toast = {
  id: string
}

type ToastStore = {
  toasts: Array<Toast>
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [{ id: '1' }, { id: '2' }]
  // bears: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 })
}))
