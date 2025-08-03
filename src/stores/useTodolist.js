import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useTodolist = create(persist((set) => ({
  list: [],
  setList: (data) => set((state) => ({ list: [data, ...state.list] }))
}), {
  name: 'todolist',
  storage: createJSONStorage(() => localStorage)
}))

export default useTodolist;