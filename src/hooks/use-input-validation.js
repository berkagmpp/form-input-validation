import { useState } from "react";

const useInputValidation = valueValidate => {
    const [enteredValue, setEnteredValue] = useState('');
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const valueIsValid = valueValidate(enteredValue);
    const hasError = !valueIsValid && valueIsTouched;
    const valueErrorStyle = hasError ? 'form-control invalid' : 'form-control';

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    }

    const valueBlurHandler = () => {
        setValueIsTouched(true);
    };

    const valueReset = () => {
        setEnteredValue('');
        setValueIsTouched(false);
    };

    return {
        value: enteredValue,
        valueIsValid,
        hasError,
        valueErrorStyle,
        valueChangeHandler,
        valueBlurHandler,
        valueReset
    };
};

export default useInputValidation;