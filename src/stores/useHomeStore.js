import { create } from 'zustand'

const useHomeStore = create((set) => ({
  count: 0,
  setCount: () => set((state) => ({ count: state.count + 1 }))
}))

export default useHomeStore;