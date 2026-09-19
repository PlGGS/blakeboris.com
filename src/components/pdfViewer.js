import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export default function PdfViewer({ scale, numPages, setNumPages }) {
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div id='container' style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Document 
                file="Resume.pdf" 
                onLoadSuccess={onDocumentLoadSuccess} 
            >
                {[...Array(numPages).keys()].map((index) => (
                    <div key={index} id='doc' style={{
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
                        marginTop: '2.5em'
                    }}>
                        <Page pageNumber={index + 1} renderTextLayer={false} scale={scale} />
                    </div>
                ))}
            </Document>
        </div>
    );
}
