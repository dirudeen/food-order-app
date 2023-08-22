import  { useReducer, } from "react";

const defaultValues = {
  value: "",
  isTouched: false,
};

function stateReducer(state, action) {
    if(action.type === 'BLUR') {
        return {value: state.value, isTouched: action.isTouched}
    }
    if(action.type === 'INPUT') {
        return {value: action.value, isTouched: state.isTouched}
    }
    if(action.type === 'RESET') {
        return {value: action.value, isTouched: action.isTouched}
    }
  return defaultValues;
}

const useInputValidation = (func) => {
  const [state, dispatcher] = useReducer(stateReducer, defaultValues)

  const isValid = func(state.value)
  const hasError = state.isTouched && !isValid;

  const blurHandler = () => {
   dispatcher({type: 'BLUR', isTouched: true})
  };

  const changeHandler = (event) => {
    dispatcher({type: 'INPUT', value: event.target.value})
  };

  const reset = () => {
    dispatcher({type: 'RESET', isTouched: false, value: ''})
  };

  return {
    value: state.value,
    hasError,
    isValid,
    reset,
    blurHandler,
    changeHandler,
  };
};

export default useInputValidation;
