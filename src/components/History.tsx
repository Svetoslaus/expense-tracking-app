import React from "react"
import { useAppSelector } from "../hooks/hooks"

export default function ExpenseHistory(){
    const expenses = useAppSelector((state) => state.expense.expenseHistory)
    return(
    <div style={{width: "100% "}}>
        {expenses.map((ex, i) => (
            <div key={i} className={ex.amount < 0 
            ? "shadow-sm p-1 my-2 d-flex bg-danger rounded text-white" 
            : "shadow-sm p-1 my-2 d-flex bg-success rounded text-white"}>
                <div>{ex.expenseName}</div>
                <div>{ex.amount}</div>
            </div>
        ))}
        {expenses.length === 0 && (<div className="p-1 my-3">No Transactions</div>)}
    </div>
    )
}