import { useEffect, useState } from 'react';
import './Contact.css';

function Contact(props) {
    useEffect(() => {
        console.log('Contact Component Loaded');
        props.setlogosOpacity(.2);

    }, [])
    return (
        <div className="contactPage ">
            <h1>Reach Out</h1>
            <div className='contactMain row m-0 p-0 justify-content-around'>
                <section className="contactAside col-lg-5 col ">
                    <div className='m-3 p-3'>
                    <h3 className='text-center'><b><em>email: mzinzun3@outlook.com</em></b></h3>
                    <h3 className='text-center'><b><em>phone: 323-691-6510</em></b></h3>
                    </div>
                    
                    <h2>What I Offer</h2>
                    <blockquote>I am a decisive problem solver trained in full-stack web development using HTML5, CSS3, Javascript, JQuery, React,
                        and NodeJS. Databases include MongoDB and SQL. Also familiar with WAN/LAN network design (Ethernet/wireless).  I work well in team environments and adapt effectively to new technologies.</blockquote>

                </section>
                <form className="contactForm col-lg-5 ">
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="firstName">First Name</label>
                        <input className='w-75 form-control' name="firstName" />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="lastName">Last Name</label>
                        <input className='w-75 form-control' name="lasttName" />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="company">Company</label>
                        <input className='w-75 form-control' name="company" />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="email">email</label>
                        <input className='w-75 form-control' name="email" />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="email">Message</label>
                        <textarea className='w-75 form-control' rows='4' name="email" placeholder='Leave a comment'></textarea>
                    </div>
                    <div className='row justify-content-end w-75'>
                        <button className='btn col-2' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;