import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '' && enteredName.trim().length !== 0;
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    };

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    };

    const emailInputChangeHandler = event => {
        setEnteredEmail(event.target.value);
    };

    const emailInputBlurHandler = event => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();     // we don't want to reload, restart the app and loose state!

        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        console.log(enteredName);
        console.log(enteredEmail);

        setEnteredName('');     // this, useState() is ideal then useRef()(nameInputRef.current.value = '';) for cleaning becouse useRef() directly manipulate DOM
        setEnteredNameTouched(false);

        setEnteredEmail('');
        setEnteredEmailTouched(false);
    };
        
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

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
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' 
                        id='email' 
                        onChange={emailInputChangeHandler} 
                        onBlur={emailInputBlurHandler} 
                        value={enteredEmail} />
                {emailInputIsInvalid && <p className="error-text">Please enter correct Email adress.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
