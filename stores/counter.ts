import { create } from 'zustand'

interface CounterState {
  count: number
}

interface CounterAction {
  inc: () => void
}

export const useCounter = create<CounterState & CounterAction>(set => ({
  count: 1,
  inc: () => set(state => ({ count: state.count + 1 }))
}))
