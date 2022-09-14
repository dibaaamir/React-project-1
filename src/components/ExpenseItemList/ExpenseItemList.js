import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseItemList.css';
import Card from '../card/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
function ExpenseItemList(props) {
  const listItems = props.expenses.map((el) => (
    <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
  ));
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
        {listItems}
      </Card>
      ;
    </div>
  );
}
export default ExpenseItemList;
