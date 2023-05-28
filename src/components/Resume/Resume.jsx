import React from 'react';
import { useEffect, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './Resume.css';
import resume from './mzResume.pdf';

import { PDFDocumentProxy } from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// ******* this workerSrc does not work with create-react-app 5  *********
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();
// const options = {
//     cMapUrl: 'cmaps/',
//     standardFontDataUrl: 'standard_fonts/',
//   };

//  ***** workerSrc solution came from:
//  ***** https://codesandbox.io/s/stackoverflow-69097706-react-pdf-demo-s2zmc?file=/src/index.js:112-224
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = (props) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [pdfDoc, setpdfDoc] = useState(resume);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    useEffect(() => {
        console.log('Resume Component loaded');
        props.setlogosOpacity(.2);
    }, [props])
    return (
        <>
            <div className='resumePage row m-0 p-0 '>
                <aside className='col-md-3 bg text-center'>
                    <h2 className='text-center border-bottom text-success'>Skills</h2>
                    <ul className="skills">
                        <li><img alt="CSS" src="https://img.shields.io/badge/Style-CSS-informational?style=flat&logo=css3&logoColor=white&color=4AB197" />CSS</li>
                        <li><img  alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" /> HTML</li>
                        <li><img src="https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript" /> Javascript</li>
                        <li><img  alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />NodeJS/Express</li>
                        <li>PHP</li>
                        <li><img  alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />ReactJS</li>
                        <li><img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />MongoDB</li>
                        <li>SQL</li>
                        <li>Problem Solving</li>
                    </ul>
                    <div className="skills2 d-flex flex-column w-90">
                        
                        
                        
                        <img className="col-1 w-100" alt="github actions" src="https://img.shields.io/badge/-Github_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white" />
                        <img className="col-1 w-100" alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
                       
                        
                    </div>
                    <div>
                        <button className="printBtn btn btn-success" type='button' onClick={() => window.print()}>Print Resume</button>
                    </div>
                </aside>
                <section className='resume col-md-9 p-0'>
                    <Document file={pdfDoc} className='resDoc' onLoadSuccess={onDocumentLoadSuccess} >
                        <Page pageNumber={pageNumber} className='resDoc' />
                    </Document>
                </section>
            </div>
        </>
    )
}
export default Resume;