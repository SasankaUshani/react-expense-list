import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import Card from '../UI/Card';
import react, { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    console.log('Filtered Year - ', filteredYear);
    setFilteredYear(selectedYear);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div>
        <Card className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          <ExpensesChart expenses={filterExpenses} />
          <ExpensesList items={filterExpenses}></ExpensesList>
        </Card>
      </div>
    </div>
  );
};

export default Expenses;
