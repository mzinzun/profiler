import { useEffect, useState } from 'react';
import './Contact.css';

function Contact(props) {
    const emptyForm = {
        lname: '',
        fname: '',
        company: '',
        email: '',
        comment: '',
    }
    const [formData, setFormData] = useState(emptyForm);
    function handleUpdateFormData(e) {
        let dataUpdate = { ...formData };
        console.log('element data', e.target.id)
        switch (e.target.id) {
            case 'firstName':
                dataUpdate.fname = e.target.value;
                break;
            case 'lastName':
                dataUpdate.lname = e.target.value
                break;
            case 'company':
                dataUpdate.company = e.target.value
                break;
            case 'email':
                dataUpdate.email = e.target.value
                break;
            case 'comment':
                dataUpdate.comment = e.target.value
                break;
            default:
                break;
        }
        setFormData(dataUpdate);
    }
    function submitData(e) {
        e.preventDefault();
        console.log('form preparing to submit using EmailJS', formData);
        
    }
    useEffect(() => {
        console.log('Contact Component Loaded');
        props.setlogosOpacity(.2);

    }, []);
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
                <form className="contactForm col-lg-5 " onSubmit={submitData}>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="firstName">First Name</label>
                        <input className='w-75 form-control'
                            name="firstName"
                            id="firstName"
                            value={formData.fname}
                            onChange={handleUpdateFormData}
                        />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="lastName">Last Name</label>
                        <input className='w-75 form-control'
                            name="lastName"
                            id="lastName"
                            value={formData.lname}
                            onChange={handleUpdateFormData} />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="company">Company</label>
                        <input className='w-75 form-control'
                            name="company"
                            id="company"
                            value={formData.company}
                            onChange={handleUpdateFormData} />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="email">email</label>
                        <input className='w-75 form-control'
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleUpdateFormData} />
                    </div>
                    <div className="form-group row m-0 p-0">
                        <label htmlFor="comment">Message</label>
                        <textarea className='w-75 form-control' rows='4'
                            name="comment"
                            id="comment"
                            value={formData.comment}
                            onChange={handleUpdateFormData}
                            placeholder='Leave a comment'></textarea>
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