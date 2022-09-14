import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseItemList.css";
import Card from "../card/Card";
function ExpenseItemList(props) {
  const listItems = props.expenses.map((el) => (
    <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
  ));
  return <Card className="expenses">{listItems}</Card>;
}
export default ExpenseItemList;
