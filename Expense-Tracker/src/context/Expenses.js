import {createContext, React} from 'react'

export const ExpenseContext = createContext({
  expenses : [],
  setExpenses : ()=>{}
})