import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseItemList.css';
import Card from '../card/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
function ExpenseItemList(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const getSelectedYearHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          select={filteredYear}
          getSelectedYear={getSelectedYearHandler}
        />
        {props.items.map((el) => (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default ExpenseItemList;
