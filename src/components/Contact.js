import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope, faAt, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


import classes from './Contact.module.css';

const isEmpty = value => value.trim() === '';
const isEmail = value => value.includes('@');

const Contact = () => {
    const formRef = useRef();
    const nameValue = useRef();
    const emailValue = useRef();
    const subjectValue = useRef();
    const messageValue = useRef();

    const [formValidity, setFormValidity] = useState({
        name: true,
        email: true,
        subject: true,
        message: true
    });

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredName = nameValue.current.value;
        const enteredEmail = emailValue.current.value;
        const enteredSubject = subjectValue.current.value;
        const enteredMessage = messageValue.current.value;

        const nameIsValid = !isEmpty(enteredName);
        const emailIsValid = isEmail(enteredEmail);
        const subjectIsValid = !isEmpty(enteredSubject);
        const messageIsValid = !isEmpty(enteredMessage);

        setFormValidity({
            name: nameIsValid,
            email: emailIsValid,
            subject: subjectIsValid,
            message: messageIsValid
        });

        const formIsValid = nameIsValid && emailIsValid && subjectIsValid && messageIsValid;

        if(!formIsValid) {
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

        formRef.current.reset();
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
        <Card>
            <form onSubmit={submitHandler} ref={formRef} className={classes['contact-form']}>
                <div className={classes['data-group']}>
                    <div className={classes['input-class']}>
                        <label htmlFor='name'>Name <FontAwesomeIcon icon={faUser}/></label>
                        <input type='text' id='name' ref={nameValue}/>
                    </div>
                    <div className={classes['input-class']}>
                        <label htmlFor='email'>Email <FontAwesomeIcon icon={faAt}/></label>
                        <input type='email' id='email' ref={emailValue} />
                    </div>
                </div>
                <div className={classes['message-group']}>
                    <div className={classes['input-class']}>
                        <label htmlFor='subject'>Subject <FontAwesomeIcon icon={faEnvelope}/></label>
                        <input type='text' id='subject' ref={subjectValue}/>
                    </div>
                    <div className={classes['input-class']}>
                        <label htmlFor='message'>Message <FontAwesomeIcon icon={faCommentDots}/></label>
                        <textarea id='message' cols='40' rows='7' ref={messageValue} minLength='25' />
                    </div>
                </div>
                <p className={classes.advertisement}>This site is protected by reCAPTCHA and the Google {policy} and {terms} apply.</p>
                <div className={classes.actions}>
                    <button>
                        <FontAwesomeIcon icon={faPaperPlane} className={'submit'}/>
                        <span>Send</span>
                    </button>
                </div>
            </form>
        </Card>
    </section>
    );
};

export default Contact;
