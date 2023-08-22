import React from "react";
import classes from "../Styles/CheckoutForm.module.css";
import useInputValidation from "../hooks/use-inputValidation";

const CheckoutForm = (props) => {
  const checkIsEmpty = (val) => val.trim() !== "";
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameInputIsValid,
    reset: resetNameInput,
    blurHandler: nameInputBlurHandler,
    changeHandler: nameInputChangeHandler,
  } = useInputValidation(checkIsEmpty);
  const {
    value: enteredStreet,
    hasError: streetInputHasError,
    isValid: streetInputIsValid,
    reset: resetStreetInput,
    blurHandler: streetInputBlurHandler,
    changeHandler: streetInputChangeHandler,
  } = useInputValidation(checkIsEmpty);
  const {
    value: enteredPostal,
    hasError: postalInputHasError,
    isValid: postalInputIsValid,
    reset: resetPostalInput,
    blurHandler: postalInputBlurHandler,
    changeHandler: postalInputChangeHandler,
  } = useInputValidation((val) => val.trim().length === 5);
  const {
    value: enteredCity,
    hasError: cityInputHasError,
    isValid: cityInputIsValid,
    reset: resetCityInput,
    blurHandler: cityInputBlurHandler,
    changeHandler: cityInputChangeHandler,
  } = useInputValidation(checkIsEmpty);

  let formIsValid = false;
  if (nameInputIsValid && streetInputIsValid && postalInputIsValid && cityInputIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    } 

    const data = {
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostal,
        city: enteredCity,
    }
    props.onConfirm(data)

    resetNameInput();
    resetStreetInput();
    resetCityInput();
    resetPostalInput();
  };

  function getInputClasses(val) {
    return val ? `${classes.control} ${classes.invalid}` : classes.control;
  }
  const nameClasses = getInputClasses(nameInputHasError);
  const streetClasses = getInputClasses(streetInputHasError);
  const postalClasses = getInputClasses(postalInputHasError);
  const cityClasses = getInputClasses(cityInputHasError);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
        />
        {nameInputHasError && <p>Please enter a valid name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetInputChangeHandler}
          onBlur={streetInputBlurHandler}
          value={enteredStreet}
        />
        {streetInputHasError && <p>Please enter valid street</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input value={enteredPostal} onBlur={postalInputBlurHandler} onChange={postalInputChangeHandler} type="text" id="postal" />
        {postalInputHasError && <p>Please enter a valid postal code</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input value={enteredCity} onBlur={cityInputBlurHandler} onChange={cityInputChangeHandler} type="text" id="city" />
        {cityInputHasError && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
