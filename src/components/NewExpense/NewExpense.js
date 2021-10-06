import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log('expenseData - ', expenseData);
    props.onAddExpense(expenseData);
    stopEditingHandler();
  };

  const [showButton, setShowButton] = useState('false');
  const startEditingHandler = () => {
    setShowButton(false);
  };

  const stopEditingHandler = () => {
    setShowButton(true);
  };

  return (
    <div className='new-expense'>
      {showButton && <button onClick={startEditingHandler}> Add Expense</button>}
      {!showButton && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
