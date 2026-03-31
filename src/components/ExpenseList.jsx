import { useExpense } from '../context/ExpenseContext'

function ExpenseList() {
  const { state, dispatch } = useExpense()

  function handleDelete(id) {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    })
  }

  if (state.expenses.length === 0) {
    return <p className="empty-message">Koi expense nahi abhi tak! 🎉</p>
  }

  return (
    <ul className="expense-list">
      {state.expenses.map(exp => (
        <li key={exp.id} className="expense-item">
          <div className="expense-info">
            <span className="expense-name">{exp.name}</span>
            <span className="expense-category">{exp.category}</span>
          </div>
          <div className="expense-right">
            <span className="expense-amount">₹{exp.amount}</span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(exp.id)}
            >
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ExpenseList