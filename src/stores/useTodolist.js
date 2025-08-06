import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useTodolist = create(persist((set) => ({
  list: [],
  setList: (data) => set((state) => ({ list: [data, ...state.list] })),
  updateList: (index, data) => set((state) => {
    const newData = [...state.list]
    newData[index] = data
    return {
      list: newData
    }
  })
}), {
  name: 'todolist',
  storage: createJSONStorage(() => localStorage)
}))

export default useTodolist;