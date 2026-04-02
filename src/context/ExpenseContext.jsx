import { createContext, useContext, useReducer, useEffect } from 'react'

const ExpenseContext = createContext()

const initialState = {
  expenses: JSON.parse(localStorage.getItem('expenses')) || []
}
function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] }
    case 'DELETE_EXPENSE':
      return { ...state, expenses: state.expenses.filter(exp => exp.id !== action.payload) }
    default:
      return state
  }
}
export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState)
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state.expenses])

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export function useExpense() {
  return useContext(ExpenseContext)
}