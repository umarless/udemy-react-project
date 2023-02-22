import React, { useState } from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <Card className='expense-item'>
      <div><ExpenseDate date={props.date}></ExpenseDate></div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <p className='expense-item__price'>${props.amount}</p>
      </div>
    </Card>
  );
}   

export default ExpenseItem;