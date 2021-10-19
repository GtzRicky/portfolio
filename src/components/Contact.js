import React, { useState } from 'react';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faAt, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';
import useInput from '../hooks/use-input';

import classes from './Contact.module.css';

const notEmpty = value => value.trim() !== '';
const messageContent = value => value.trim() !== '' && value.length > 25;
const isEmail = value => value.includes('@');

const Contact = () => {

    const [loading, setLoading] = useState(false);

    const {
        value: enteredName,
        isValid: nameIsValid,
        invalidInput: invalidName,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(notEmpty);

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        invalidInput: invalidEmail,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput(isEmail);

    const {
        value: enteredSubject,
        isValid: subjectIsValid,
        invalidInput: invalidSubject,
        valueChangeHandler: subjectChangeHandler,
        inputBlurHandler: subjectBlurHandler,
        reset: resetSubject
    } = useInput(notEmpty);

    const {
        value: enteredMessage,
        isValid: messageIsValid,
        invalidInput: invalidMessage,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessage
    } = useInput(messageContent);

    let formIsValid = false;

    if(nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
        formIsValid = true;
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);

        if(!formIsValid) {
            setLoading(false);
            return;
        };

        await axios({
            method: 'post',
            url: "https://portfolio-nodemailer.herokuapp.com/enviar-correo",
            data: {
                subject: enteredSubject,
                text: enteredMessage,
                to: "ricardogusar93@hotmail.com",
                email: enteredEmail,
                name: enteredName
            }
        });

        resetName();
        resetEmail();
        resetSubject();
        resetMessage();
        setLoading(false);
    };


    const policy = <a className={classes.advertisement} href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>;
    const terms = <a className={classes.advertisement} href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"> Terms of Service</a>

    return (
    <section className={classes.contact}>
        <div className={classes['contact-text']}>
            <h2>Contact</h2>
            <p>Do you have an idea in mind or a project you want to bring to life? </p>
            <p>Get in touch and together we will make it work. </p>
            <p> All you need to do is fill out this form:</p>
        </div>
        <Card className={classes['form-container']}>
            <form onSubmit={submitHandler} className={classes['contact-form']}>
                <div className={classes['data-group']}>
                    <div className={classes['input-class']}>
                        <label htmlFor='name'>Name <FontAwesomeIcon icon={faUser}/></label>
                        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
                        {invalidName && <p className={classes['error-text']}>Please enter your name</p>}
                    </div>
                    <div className={classes['input-class']}>
                        <label htmlFor='email'>Email <FontAwesomeIcon icon={faAt}/></label>
                        <input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
                        {invalidEmail && <p className={classes['error-text']}>Please enter a valid email</p>}
                    </div>
                </div>
                <div className={classes['message-group']}>
                    <div className={classes['input-class']}>
                        <label htmlFor='subject'>Subject <FontAwesomeIcon icon={faEnvelope}/></label>
                        <input type='text' id='subject' onChange={subjectChangeHandler} onBlur={subjectBlurHandler} value={enteredSubject} />
                        {invalidSubject && <p className={classes['error-text']}>Please enter a subject</p>}
                    </div>
                    <div className={classes['input-class']}>
                        <label htmlFor='message'>Message <FontAwesomeIcon icon={faCommentDots}/></label>
                        <textarea id='message' cols='40' rows='7' onChange={messageChangeHandler} onBlur={messageBlurHandler} value={enteredMessage} />
                        {invalidMessage && <p className={classes['error-text']}>Please enter a message (min. 25 characters long)</p>}
                    </div>
                </div>
                <p className={classes.advertisement}>This site is protected by reCAPTCHA and the Google {policy} and {terms} apply.</p>
                <div className={`${classes.actions} ${formIsValid ? '' : `${classes.invalid}`}`}>
                    <button>
                        {loading
                            ? <SpinnerCircular size='25px' color='#000' secondaryColor='#6b6b6b' />
                            : <><FontAwesomeIcon icon={faPaperPlane} className={'submit'}/>
                                <span>Send</span></>
                        }
                    </button>
                </div>
            </form>
        </Card>
    </section>
    );
};

export default Contact;