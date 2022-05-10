import { useState, useRef } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();     // we don't want to reload, restart the app and loose state!

        setEnteredNameTouched(true);

        if(enteredName.trim() === '' || enteredName.trim().length === 0) {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);
        const enteredValue = nameInputRef.current.value;

        setEnteredName('');     // this, useState() is ideal then useRef()(nameInputRef.current.value = '';) for cleaning becouse useRef() directly manipulate DOM
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; 
        
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} 
                       type='text' 
                       id='name' 
                       onChange={nameInputChangeHandler} 
                       value={enteredName} />
                {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
