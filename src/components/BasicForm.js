import useInputValidation from '../hooks/use-input-validation';

import '../index.css';

const BasicForm = (props) => {
    const {
        value: enteredfName,
        IsTouched: fnameIsTouched,
        valueChangeHandler: fnameChangeHandler,
        valueBlurHandler: fnameBlurHandler,
        valueIsValid: fnameIsValid,
        valueErrorStyle: fnameErrorStyle,
        valueReset: fnameReset
    } = useInputValidation(value => value.trim() != '');

    const {
        value: enteredlName,
        IsTouched: lnameIsTouched,
        valueChangeHandler: lnameChangeHandler,
        valueBlurHandler: lnameBlurHandler,
        valueIsValid: lnameIsValid,
        valueErrorStyle: lnameErrorStyle,
        valueReset: lnameReset
    } = useInputValidation(value => value.trim() != '');

    const {
        value: enteredEmail,
        IsTouched: emailIsTouched,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        valueIsValid: emailIsValid,
        valueErrorStyle: emailErrorStyle,
        valueReset: emailReset
    } = useInputValidation(value => value.includes('@'));

    const formIsValid = fnameIsValid && lnameIsValid && emailIsValid;

    const formSubmitHandler = event => {
        event.preventDefault();

        if (!fnameIsValid || !lnameIsValid || !emailIsValid) {
            return;
        }

        console.log(enteredfName);
        console.log(enteredlName);
        console.log(enteredEmail);
        fnameReset();
        lnameReset();
        emailReset();
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={fnameErrorStyle}>
                    <label htmlFor='fname'>First Name</label>
                    <input value={enteredfName}
                           onChange={fnameChangeHandler}
                           onBlur={fnameBlurHandler}
                           type='text' 
                           id='fname' />
                    {fnameIsTouched && !fnameIsValid && <p className="error-text">'First name must be entered.'</p>}
                </div>
                <div className={lnameErrorStyle}>
                    <label htmlFor='lname'>Last Name</label>
                    <input value={enteredlName}
                           onChange={lnameChangeHandler}
                           onBlur={lnameBlurHandler}
                           type='text' 
                           id='lname' />
                    {lnameIsTouched && !lnameIsValid && <p className="error-text">'Last name must be entered.'</p>}
                </div>
            </div>
            <div className={emailErrorStyle}>
                <label htmlFor='email'>E-Mail Address</label>
                <input value={enteredEmail}
                       onChange={emailChangeHandler}
                       onBlur={emailBlurHandler}
                       type='text' 
                       id='email' />
                       {emailIsTouched && !emailIsValid && <p className="error-text">'Email must include @.'</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
