import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExpenseState{
    balance: number;
    expense: number;
    income: number;
    expenseHistory: {
        expenseName: string
        amount: number
    }[]
}

export interface IExpense{
    expenseName: string
    amount: number | string
}

const initialState : ExpenseState = {
    balance: 0,
    expense: 0,
    income: 0, 
    expenseHistory: []
}

export const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
            addExpenseToHistory: (state, action: PayloadAction<IExpense>) => {
                if (typeof action.payload.amount !== "number"){
                    state.expenseHistory.push({
                        expenseName: action.payload.expenseName,
                        amount: parseFloat(action.payload.amount)
                    })
                }
            },
            calculateBalance: (state, action: PayloadAction<void>) => {
                    state.balance = state.expenseHistory.reduce(
                        (acc, ex) => acc + ex.amount,0
                    )
            },
            calculateIncome: (state, action: PayloadAction<void>) => {
                    state.income = state.expenseHistory.reduce((acc, ex) => {
                        if(ex.amount > 0) {
                            return Math.abs(acc + ex.amount)
                        }
                        return acc
                    }, 0)
            },
            calculateExpense: (state, action: PayloadAction<void>) => {
                state.expense = state.expenseHistory.reduce((acc, ex) => {
                    if(ex.amount < 0) {
                        return Math.abs(acc + ex.amount)
                    }
                    return 0
                }, 0)
        },
    }
})


export const {
    calculateBalance,
    addExpenseToHistory,
    calculateExpense,
    calculateIncome,
} = expenseSlice.actions

export default expenseSlice.reducer