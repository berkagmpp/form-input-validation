import { useState, useRef } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const nameInputRef = useRef();

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();     // we don't want to reload, restart the app and loose state!
        const enteredValue = nameInputRef.current.value;
        
        setEnteredName('');     // this, useState() is ideal then useRef()(nameInputRef.current.value = '';) for cleaning becouse useRef() directly manipulate DOM
    };
        
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} 
                       type='text' 
                       id='name' 
                       onChange={nameInputChangeHandler} 
                       value={enteredName} />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
