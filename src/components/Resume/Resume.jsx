import React from 'react';
import { useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './Resume.css';
import resume from './mzResume.pdf'
const Resume = (props) => {
    // const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        console.log('Resume Component loaded');
        props.setlogosOpacity(.2);
    }, [props])
    return (
        <>
            <div className='resumePage row m-0 p-0 '>
                <aside className='col-4 bg-success'>
                    <h2>Skills</h2>
                    <ul className = "skills">
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>NodeJS/Express</li>
                        <li>PHP</li>
                        <li>ReactJS</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>Problem Solving</li>

                    </ul>
                </aside>
                <section className='resume col-8'>
                    <Document file={resume} className='resDoc'>
                        <Page pageNumber={1} className='resDoc' />
                    </Document>
                </section>
            </div>
        </>
    )
}
export default Resume;