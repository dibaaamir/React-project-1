import './ExpensesList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpensesList = (props) => {
  let expensesContent = <p>No Expenses Found!</p>;

  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  return (
    <ul className="expenses-list">
      {props.items.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
