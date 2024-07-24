
import { Container } from 'react-bootstrap'
import Balance from './components/Balance'
import TransactionForm from './components/Transaction'
import ExpenseHistory from './components/History'
import IncomeAndExpense from './components/IncomeAndExpense'


function App() {


  return (

    <Container 
      className="d-flex flex-column align-items-center mt-5 card shadow rounded p-3" 
      style={{maxWidth: "500px"}}>
      <Balance/>
      <IncomeAndExpense/>
      <ExpenseHistory/>
      <TransactionForm/>
    </Container>
   

  )
}

export default App
