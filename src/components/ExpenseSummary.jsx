import { useExpense } from '../context/ExpenseContext'

function ExpenseSummary() {
  const { state } = useExpense()

  const total = state.expenses.reduce((sum, exp) => sum + exp.amount, 0)

  return (
    <div className="summary">
      <h2>Total Expenses</h2>
      <p className="total-amount">₹{total}</p>
      <p className="expense-count">{state.expenses.length} expenses added</p>
    </div>
  )
}

export default ExpenseSummary
