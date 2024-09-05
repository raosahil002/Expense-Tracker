import React, { useState } from 'react'
import './App.css'
const App = () => {

  const[input,setInput]=useState('');
  const[amount,setAmount]=useState('')
  const[expenses,setExpenses]=useState([])

  const addExpense=()=>{
    if(!input || !amount)return;

    const newExpense = {
      id:expenses.length+1,
      title:input,
      amount:amount
    };
    setExpenses([...expenses,newExpense])
    setAmount('')
    setInput('')
  }

  const deleteExpense =(id)=>{
     setExpenses(expenses.filter((expenses)=>expenses.id !==id))
  }
  return (
    <div className='container'>
      <h2>Expense Tracker</h2>
      <div className='input-field'>
        <input type="text"
        placeholder='Expense'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <input type="number"
        placeholder='Amount'
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul className='expense-list'>
        {
          expenses.map((expense)=>(
            <li key={expense.id}>
              <div className='expense-title'>{expense.title}</div>
              <div className='expense-amount'>{expense.amount}</div>
              <button onClick={()=>deleteExpense(expense.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
