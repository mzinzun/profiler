import { useEffect, useState } from 'react';
import './Bio.css';

function Bio(props) {
    const [bioOpacity, setBioOpacity] = useState(0);
    useEffect(() => {
        console.log('Bio Component Loaded');
        const bioPage = document.querySelector('.bioPage');
        props.setlogosOpacity(.2);
        setBioOpacity(.7);
    }, []);
    useEffect(() => {
        console.log('Bio Component updated');
    });
    return (
        <>
            <section className='bioPage' style={{
                opacity: bioOpacity
            }}>
                <h1>About Me:</h1>
                <blockquote className='bio'>
                    I am highly motivated and pride myself on my problem solving skills. I have been in the IT industry for many years and have built a strong foundation in Information Technology. As a result I am able to effectively learn new technologies and programming languages. My experience has shown that I work well helping others with learning challenging concepts and I believe that anyone can learn how to code. </blockquote>
                <blockquote className='bio'>With the proper tools (and a little creativity) , even the most challenging problems can be resolved. Through The Last Mile WDF program, I immersed myself in intensive hands-on training in full stack web development technologies including NodeJS, Express, React, and MongDB. This on top of HTML, CSS and libraries such as Bootstrap, Jquery, and fontAwesome. Projects included full stack, responsive web sites. I really enjoy working with computers and I especially enjoy starting projects and seeing the end result
                </blockquote>
            </section>

        </>
    )
}
export default Bio;