import { ExpenseProvider } from './context/ExpenseContext'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseSummary from './components/ExpenseSummary'
import './App.css'

function App() {
  return (
    <ExpenseProvider>
      <div className="container">
        <h1>Expense Tracker 💸</h1>
        <ExpenseSummary />
        <ExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  )
}

export default App