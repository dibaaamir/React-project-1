import React, { useState } from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const [selectItem, setSelectItem] = useState('');

  const selectItemHandler = (event) => {
    setSelectItem(event.target.value);
    props.getSelectedYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectItemHandler} value={props.select}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
