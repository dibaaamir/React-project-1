import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';
import Card from '../card/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const getSelectedYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses Found!</p>;

  if (filteredExpenses.length > 0)
    expensesContent = filteredExpenses.map((el) => (
      <ExpenseItem
        key={el.id}
        title={el.title}
        amount={el.amount}
        date={el.date}
      />
    ));
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          select={filteredYear}
          getSelectedYear={getSelectedYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}
export default Expenses;
