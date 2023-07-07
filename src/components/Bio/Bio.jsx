import { useEffect, useState } from 'react';
import './Bio.css';

function Bio(props) {
    const [bioOpacity, setBioOpacity] = useState(0);
    useEffect(() => {
        console.log('Bio Component Loaded');
        props.setlogosOpacity(.2);
        setBioOpacity(.7);
    }, []);
    useEffect(() => {
        console.log('Bio Component updated');
    });
    return (
        <>
            <section className='bioPage'
                style={{ opacity: bioOpacity }}>
                <h2>About Me:</h2>
                <blockquote className='bio'>
                    I am a highly motivated individual who takes pride in my problem-solving skills. With extensive experience in the IT industry, I have developed a strong foundation in Information Technology. This background enables me to quickly grasp new technologies and programming languages efficiently. Over the years, I have discovered that I excel at helping others comprehend complex concepts and firmly believe that anyone can learn how to code.
                </blockquote>
                <blockquote className='bio'>I firmly believe that with the right tools and a touch of creativity, even the most challenging problems can be overcome. Through my participation in The Last Mile WDF program, I underwent immersive, hands-on training in full stack web development technologies such as NodeJS, Express, React, and MongoDB. Additionally, I possess expertise in HTML, CSS, and various libraries like Bootstrap, jQuery, and FontAwesome. I find great satisfaction in working with computers, particularly in initiating projects and witnessing their successful completion.
                </blockquote>
            </section>

        </>
    )
}
export default Bio;