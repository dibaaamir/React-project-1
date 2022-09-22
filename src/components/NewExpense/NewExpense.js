import './NewExpense.css';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

const NewExpense = (props) => {
  const onSaveNewExpenseHandler = (expense) => {
    const expenses = {
      id: Math.random().toString(),
      ...expense,
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
