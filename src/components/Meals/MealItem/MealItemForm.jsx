import React, { useRef, useState } from "react";
import classes from "../../Styles/MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const CartInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = CartInputRef.current.value;
    const enteredAmountNumber = +enteredAmount


    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      return setAmountIsValid(false)
    }
    setAmountIsValid(true)

    props.onAdd(enteredAmountNumber)
  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={CartInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!amountIsValid && <p>Enter a valid amount (1-5)</p>}
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
