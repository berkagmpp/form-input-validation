import { useState } from "react";

const useInputValidation = valueValidate => {
    const [enteredValue, setEnteredValue] = useState('');
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
        setValueIsTouched(true);
    }

    const valueBlurHandler = () => {
        setValueIsTouched(true);
    };

    const valueIsValid = valueValidate(enteredValue) && valueIsTouched;

    const valueErrorStyle = valueIsTouched && !valueIsValid ? 'form-control invalid' : 'form-control';

    const valueReset = () => {
        setEnteredValue('');
        setValueIsTouched(false);
    };

    return {
        value: enteredValue,
        IsTouched: valueIsTouched,
        valueChangeHandler,
        valueBlurHandler,
        valueIsValid,
        valueErrorStyle,
        valueReset
    };
};

export default useInputValidation;