import React from "react";
import classes from "../../Styles/MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <Form className={classes.form}>
      <input type="number" step={1} />
      <button>+ Add</button>
    </Form>
  );
};

export default MealItemForm;
