"use client"

import { useBalance as useBalanceStore } from "../stores/balance";

export const useBalance = () => {
    const balance = useBalanceStore((state) => state.balance);
    return balance;
}

export const useBalanceActions = () => {
    const { setBalance, increment, decrement, reset } = useBalanceStore((state) => ({
        setBalance: state.setBalance,
        increment: state.increment,
        decrement: state.decrement,
        reset: state.reset
    }));
    
    return { setBalance, increment, decrement, reset };
}