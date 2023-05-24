import {useEffect,useState} from 'react';
import './Contact.css';

function Contact(props){
    useEffect(()=>{
        console.log('Contact Component Loaded');
        props.setlogosOpacity(.2);

    },[])
    return (
        <>
            <h1>Contact Page</h1>
        </>
    )
}

export default Contact;