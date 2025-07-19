"use client"

import { create } from 'zustand'

interface BalanceState {
  balance: number
  setBalance: (balance: number) => void
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useBalance = create<BalanceState>((set, get) => ({
  balance: 0,
  
  setBalance: (balance: number) => 
    set({ balance }),
  
  increment: () => 
    set((state) => ({ balance: state.balance + 1 })),
  
  decrement: () => 
    set((state) => ({ balance: state.balance - 1 })),
  
  reset: () => 
    set({ balance: 0 })
}))