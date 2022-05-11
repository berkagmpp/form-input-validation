import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredAge, setEnteredAge] = useState('');
    const [enteredAgeTouched, setEnteredAgeTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '' && enteredName.trim().length !== 0;
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredAgeIsValid = enteredAge.trim() !== '' && enteredAge.trim().length !== 0 && enteredAge > 0;
    const ageInputIsInvalid = !enteredAgeIsValid && enteredAgeTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredAgeIsValid) {
        formIsValid = true;
    };

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    };

    const ageInputChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    const ageInputBlurHandler = event => {
        setEnteredAgeTouched(true);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();     // we don't want to reload, restart the app and loose state!

        setEnteredNameTouched(true);
        setEnteredAgeTouched(true);

        if (!enteredNameIsValid || !enteredAgeIsValid) {
            return;
        }

        console.log(enteredName);
        console.log(enteredAge);

        setEnteredName('');     // this, useState() is ideal then useRef()(nameInputRef.current.value = '';) for cleaning becouse useRef() directly manipulate DOM
        setEnteredNameTouched(false);
        setEnteredAge('');
        setEnteredAgeTouched(false);
    };
        
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const ageInputClasses = ageInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' 
                    id='name' 
                    onChange={nameInputChangeHandler} 
                    onBlur={nameInputBlurHandler} 
                    value={enteredName} />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className={ageInputClasses}>
                <label htmlFor='age'>Your Age</label>
                <input type='number' 
                        id='age' 
                        onChange={ageInputChangeHandler} 
                        onBlur={ageInputBlurHandler} 
                        value={enteredAge} />
                {ageInputIsInvalid && <p className="error-text">Age must not be empty and greater then 0.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
