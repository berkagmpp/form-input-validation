import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);    // (value) => value.trim() !== '' of useInput() of SimpleInput.js is excuted here!
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = event => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');     // this, useState() is ideal then useRef()(nameInputRef.current.value = '';) for cleaning becouse useRef() directly manipulate DOM
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        IsValid: valueIsValid,
        hasError,    // same with hasError: hasError
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;