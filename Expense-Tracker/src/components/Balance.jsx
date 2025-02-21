import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map((transaction)=>{
    return transaction.amount
  })

  const total = amounts.reduce((acc, amount)=> (acc += amount),0 ).toFixed(2)

  return (
    <>
      <h4 className='text-sm'>Your Balance</h4>  
      <h1 >${total}</h1>
    </>
  )
}

export default Balance
