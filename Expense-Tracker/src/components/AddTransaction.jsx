import React,{useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
  const [text,setText] = useState('')
  const [amount,setAmount] = useState(0)

  const {addTransactions} = useContext(GlobalContext)

  const onSubmit = e =>{
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransactions(newTransaction)
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>{
              setText(e.target.value)
          }} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)
            </label>
          <input type="number"  placeholder="Enter amount..."  value={amount} onChange={(e)=>{
            setAmount(e.target.value)
          }} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
