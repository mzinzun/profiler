import { useEffect, useState } from 'react';
import './Contact.css';

function Contact(props) {
    useEffect(() => {
        console.log('Contact Component Loaded');
        props.setlogosOpacity(.2);

    }, [])
    return (
        <div className="contactPage">
            <h1>Contact Page</h1>
            <div className="contactHeader">

            </div>
            <form className="form d.flex flex-col border  w-50">
                <div className="form-group col">
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" />
                </div>
                
            </form>
        </div>
    )
}

export default Contact;