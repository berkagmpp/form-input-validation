import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    }
    if (action.type === 'TOUCH') {
        return {
            value: state.value,
            isTouched: true
        }
    }
    if (action.type === 'RESET') {
        return {
            value: '',
            isTouched: false
        }
    }
    return initialInputState;
};

const useInputValidation = valueValidate => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = valueValidate(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;
    const valueErrorStyle = hasError ? 'form-control invalid' : 'form-control';

    const valueChangeHandler = event => {
        dispatch({
            type: 'INPUT', 
            value: event.target.value
        });
    }

    const valueBlurHandler = () => {
        dispatch({type: 'TOUCH'});
    };

    const valueReset = () => {
        dispatch({type: 'RESET'});
    };

    return {
        value: inputState.value,
        valueIsValid,
        hasError,
        valueErrorStyle,
        valueChangeHandler,
        valueBlurHandler,
        valueReset
    };
};

export default useInputValidation;