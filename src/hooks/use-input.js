import { useState } from "react";

const useInput = (validation) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validation(enteredValue);
    const invalidInput = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };
 
    return {
        value: enteredValue,
        isValid: valueIsValid,
        invalidInput,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;