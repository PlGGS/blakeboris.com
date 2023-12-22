import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Layout from '../components/layout';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div id='container' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Document file="Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <div id='doc' style={{
                    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
                    // transform: 'scale(1.1)',
                    marginTop: '2.5em'
                }}>
                    <Page pageNumber={pageNumber} renderTextLayer={false} />
                </div>
            </Document>
        </div>
    );
}

const Resume = () => (
    <Layout>
        <PdfViewer/>
    </Layout>
);

export default Resume;
