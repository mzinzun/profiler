import React from 'react';
import { useEffect,useState } from 'react';
import { pdfjs,Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
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
    const [pdfDoc,setpdfDoc]=useState(resume);
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
                    <div>
                        <button className= "printBtn btn btn-success" type='button' onClick={()=>window.print()}>Print Resume</button>
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