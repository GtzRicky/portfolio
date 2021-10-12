import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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
            data: JSON.stringify({
                subject: enteredSubject,
                text: enteredMessage,
                to: "ricardogusar93@hotmail.com",
                email: enteredEmail,
                name: enteredName
            })
        });

        formRef.current.reset();
    };

    return (
    <section className={'contact'}>
        <h2>Contact</h2>
        <div className={'contact-text'}>
            <p>Do you have an idea in mind or a project you want to bring to life? <br/>
                Get in touch and together we will make it work. <br/>
                All you need to do is to fill out this form.</p>
        </div>
        <div className={'contact-form'}>
            <Card>
                <form onSubmit={submitHandler} ref={formRef}>
                    <div className={'data-group'}>
                        <div classes={'nameInputClasses'}>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' ref={nameValue}/>
                        </div>
                        <div className={'emailInputClasses'}>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' ref={emailValue} />
                        </div>
                    </div>
                    <div className={'message-group'}>
                        <div>
                            <label htmlFor='subject'>Subject</label>
                            <input type='text' id='subject' ref={subjectValue}/>
                        </div>
                        <div>
                            <label htmlFor='message'>Message</label>
                            <textarea id='message' cols='40' rows='10' ref={messageValue} minLength='25' />
                        </div>
                    </div>
                    <div>
                        <button>Send<FontAwesomeIcon icon={faPaperPlane}/></button>
                    </div>
                </form>
            </Card>
        </div>
    </section>
    );
};

export default Contact;
