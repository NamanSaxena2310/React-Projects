import React from 'react'

function ExpenseForm() {
  return (
    <div>
      <form >
      <div className='p-3'>
      <label>Expense Name : </label>
      <input type='text' name='expense-name' placeholder='Enter your Expense name' className='border-2 border-slate-700 p-1 rounded-lg  '></input>
      </div>

      <div className='p-3'>
      <label>Amount : </label>
      <input type='text' name='expense-name' placeholder='Enter your Expense name' className='border-2 border-slate-700 p-1 rounded-lg  '></input>
      </div>

      <div className='p-3'>
      <label>Category : </label>
      <select>
        <option value="Personal">Personal</option>
        <option value="Family">Family</option>
        <option value="Work">Work</option>
        <option value="Misc">Misc</option>
      </select>
      </div>

      
        
      </form>
    </div>
  )
}

export default ExpenseForm
