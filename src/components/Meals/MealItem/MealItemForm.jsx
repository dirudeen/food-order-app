import React from "react";
import classes from "../../Styles/MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <input type="number" step={1} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
