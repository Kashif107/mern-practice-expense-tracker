import { useState } from 'react'
import { useExpense } from '../context/ExpenseContext'

function ExpenseForm() {
  const { dispatch } = useExpense()
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !amount) return

    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        id: Date.now(),
        name,
        amount: Number(amount),
        category
      }
    })

    setName('')
    setAmount('')
    setCategory('Food')
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm