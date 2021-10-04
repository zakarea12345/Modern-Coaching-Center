import React from 'react';
import ContactDetails from '../ContactDetails/ContactDetails';
import ContactForm from '../ContactForm/ContactForm';

// this variable will show contact page 
const Contact = () => {
    return (
        <div>
            <div className="bg-dark text-light p-5 mb-5">
                <h1 className="text-center">Contact Us</h1>
                <p className="text-center">
                    Home -- Contact-Us
                </p>
            </div>
            {/* contact details information  */}
            <ContactDetails></ContactDetails>
            {/* contact form  */}
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;