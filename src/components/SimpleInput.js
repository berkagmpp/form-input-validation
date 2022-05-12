import useInput from "../hooks/use-input";

const SimpleInput = ( ) => {
    const { value: enteredName,
            IsValid: enteredNameIsValid,
            hasError: nameInputHasError, 
            valueChangeHandler: nameChangeHandler, 
            inputBlurHandler: nameBlurHandler,
            reset: nameReset
    } = useInput((value) => value.trim() !== '');   // not excuted, just defined here and pass to validateValue parameter of useInput() in use-input.js

    const { value: enteredEmail,
            IsValid: enteredEmailIsValid,
            hasError: emailInputHasError, 
            valueChangeHandler: emailChangeHandler, 
            inputBlurHandler: emailBlurHandler,
            reset: emailReset
    } = useInput((value) => value.includes('@'));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    };

    const formSubmissionHandler = event => {
        event.preventDefault();     // we don't want to reload, restart the app and loose state!

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        console.log(enteredName);
        console.log(enteredEmail);

        nameReset();
        emailReset();
    };
        
    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' 
                    id='name' 
                    onChange={nameChangeHandler} 
                    onBlur={nameBlurHandler} 
                    value={enteredName} />
                {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' 
                        id='email' 
                        onChange={emailChangeHandler} 
                        onBlur={emailBlurHandler} 
                        value={enteredEmail} />
                {emailInputHasError && <p className="error-text">Please enter correct Email adress.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
