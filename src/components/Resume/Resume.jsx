import React from 'react';
import { useEffect,useState } from 'react';
import { pdfjs,Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './Resume.css';
import resume from './mzResume.pdf';

import { PDFDocumentProxy } from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();
// const options = {
//     cMapUrl: 'cmaps/',
//     standardFontDataUrl: 'standard_fonts/',
//   };

const Resume = (props) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [res1,setres1]=useState(resume);
    // function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy) {
    //     setNumPages(nextNumPages);
    //   }
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
                    <Document file={res1} className='resDoc' onLoadSuccess={onDocumentLoadSuccess} >
                        <Page pageNumber={pageNumber} className='resDoc' />
                    </Document>
                </section>
            </div>
        </>
    )
}
export default Resume;