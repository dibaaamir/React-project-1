import './NewExpense.css';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

const NewExpense = (props) => {
  const onSaveNewExpenseHandler = (expense) => {
    const expenses = {
      ...expense,
      id: Math.random().toString(),
    };
    props.addNewExpence(expenses);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={onSaveNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
