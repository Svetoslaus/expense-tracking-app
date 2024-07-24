import { useAppSelector } from "../hooks/hooks";



export default function Balance() {
    const balance = useAppSelector((state) => state.expense.balance)
    return (
    <div className="fw-bold">
        Your Balance is: 
        <span className="text-muted"> € {balance}</span>
    </div>
    )
}  