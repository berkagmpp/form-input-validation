import useInputValidation from '../hooks/use-input-validation';

import '../index.css';

const isNotEmpty = value => value.trim() != '';
const isIncludeEmail = value => value.includes('@');

const BasicForm = () => {
    const {
        value: enteredfName,
        valueIsValid: fnameIsValid,
        hasError: fnameHasError,
        valueErrorStyle: fnameErrorStyle,
        valueChangeHandler: fnameChangeHandler,
        valueBlurHandler: fnameBlurHandler,
        valueReset: fnameReset
    } = useInputValidation(isNotEmpty);

    const {
        value: enteredlName,
        valueIsValid: lnameIsValid,
        hasError: lnameHasError,
        valueErrorStyle: lnameErrorStyle,
        valueChangeHandler: lnameChangeHandler,
        valueBlurHandler: lnameBlurHandler,
        valueReset: lnameReset
    } = useInputValidation(isNotEmpty);

    const {
        value: enteredEmail,
        valueIsValid: emailIsValid,
        hasError: emailHasError,
        valueErrorStyle: emailErrorStyle,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        valueReset: emailReset
    } = useInputValidation(isIncludeEmail);

    const formIsValid = fnameIsValid && lnameIsValid && emailIsValid;

    const formSubmitHandler = event => {
        event.preventDefault();

        if (!formIsValid) {
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
                    {fnameHasError && <p className="error-text">'First name must be entered.'</p>}
                </div>
                <div className={lnameErrorStyle}>
                    <label htmlFor='lname'>Last Name</label>
                    <input value={enteredlName}
                           onChange={lnameChangeHandler}
                           onBlur={lnameBlurHandler}
                           type='text' 
                           id='lname' />
                    {lnameHasError && <p className="error-text">'Last name must be entered.'</p>}
                </div>
            </div>
            <div className={emailErrorStyle}>
                <label htmlFor='email'>E-Mail Address</label>
                <input value={enteredEmail}
                       onChange={emailChangeHandler}
                       onBlur={emailBlurHandler}
                       type='text' 
                       id='email' />
                       {emailHasError && <p className="error-text">'Email must include @.'</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
