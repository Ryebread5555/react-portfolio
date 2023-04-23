import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactForm () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.taget.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.taget.name]: e.taget.value })
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
    }

return (
         <section>
         <h1 data-testid='h1tag' className="contact">CONTACT ME</h1>
         <form id="contact-form">
            <div class="col-12">
                <label htmlFor="name">Name:</label>
                <input type="text" class="form-control" width="100px" defaultValue={name} onBlur={handleChange} name="name" />
             </div>
             <div class="col-12">
                <label htmlFor="email">Email address:</label>
                <input type="email" class="form-control" defaultValue={email} onBlur={handleChange} name="email" />
            </div>
             <div class="col-12">
                <label htmlFor="message">Message:</label>
                <textarea name="message" class="form-control" defaultValue={message} onBlur={handleChange} rows="7" />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <br></br>
            <div class="col-12">
            <button data-testid='button' class="btn btn-outline-dark" type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section> 
)

}

export default ContactForm;


