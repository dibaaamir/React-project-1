import './NewExpense.css';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const onSaveNewExpenseHandler = (expense) => {
    const expenses = {
      id: Math.random().toString(),
      ...expense,
    };
    props.addNewExpence(expenses);
    setShowForm(false);
  };
  const startEditingHandler = () => {
    setShowForm(true);
  };
  const stopEditingHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveNewExpense={onSaveNewExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
