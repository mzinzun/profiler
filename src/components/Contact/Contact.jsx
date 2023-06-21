import { useEffect, useState } from 'react';
import './Contact.css';

function Contact(props) {
    useEffect(() => {
        console.log('Contact Component Loaded');
        props.setlogosOpacity(.2);

    }, [])
    return (
        <div className="contactPage">
            <h1>Reach Out</h1>
            <div className='contactMain'>
                <section className="contactAside">
                    <img></img>
                    <h2>What I Offer</h2>
                    <blockquote>I am a decisive problem solver trained in full-stack web development using HTML5, CSS3, Javascript, JQuery, React,
                        and NodeJS. Databases include MongoDB and SQL. Also familiar with WAN/LAN network design (Ethernet/wireless).  I work well in team environments and adapt effectively to new technologies.</blockquote>

                </section>
                <form className="contactForm">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="firstName">First Name</label>
                        <input className='w-50' name="firstName" />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="lastName">Last Name</label>
                        <input className='w-50' name="lasttName" />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="company">Company</label>
                        <input className='w-50' name="company" />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="email">email</label>
                        <input className='w-50' name="email" />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="email">Message</label>
                        <textarea className='w-75' rows='4' name="email" placeholder='Leave a comment'></textarea>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Contact;