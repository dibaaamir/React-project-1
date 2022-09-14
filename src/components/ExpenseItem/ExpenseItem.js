import "./ExpenseItem.css";
import "./components/ExpenseDate/ExpenseDate";
import ExpenseDate from "./components/ExpenseDate/ExpenseDate";
import Card from "../card/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [Title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("changed");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>click me</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
