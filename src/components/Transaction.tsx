import React from "react"
import { useAppDispatch } from "../hooks/hooks"
import { addExpenseToHistory, calculateBalance, calculateExpense, calculateIncome, IExpense } from "../redux/features/expensSlice"
import { useState } from "react"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"



export default function TransactionForm(){
    const dispatch = useAppDispatch()
    const [expense, setExpense] = useState<IExpense>({
        expenseName:"",
        amount:"",
    })
    const onChange = <K extends keyof IExpense>(key: K, value:IExpense[K]) => {
        setExpense({...expense, [key]:value})
    }
    return (
    <div className="mt-3">
        <h3 className="border-bottom border-2">Add Your New Transaction</h3>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Text</Form.Label>
        <Form.Control 
        onChange={(e) => 
            onChange(e.target.name as keyof IExpense, e.target.value)} type="email" placeholder="Enter text" name="expenseName"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Amount</Form.Label> 
        <Form.Control 
        type="email" placeholder="Enter amount" name="amount" 
        onChange={(e)=> onChange(e.target.name as keyof IExpense, e.target.value)}
        />
    </Form.Group>
    <Button
        onClick={() => {
            if(typeof expense.amount === "string" && !isNaN(parseFloat(expense.amount))){
                dispatch(addExpenseToHistory(expense))
                dispatch(calculateBalance())
                dispatch(calculateIncome())
                dispatch(calculateExpense())
            }
        }}
    >
        Add Transaction
    </Button>
  
    </div>
  )
}