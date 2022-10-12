import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import Card from '../card/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../Chart/Components/ExpensesChart/ExpensesChart';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const getSelectedYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          select={filteredYear}
          getSelectedYear={getSelectedYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
