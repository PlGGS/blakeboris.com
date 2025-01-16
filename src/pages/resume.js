import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Layout from '../components/layout';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer({ scale, numPages, setNumPages }) {
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

const Resume = () => {
    const [scale, setScale] = useState(1.3);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setScale(window.innerWidth <= 1080 ? 0.6 : 1.3);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Layout>
            <PdfViewer style={{ paddingBottom: '1200rem' }} scale={scale} numPages={numPages || 1} setNumPages={setNumPages} />
            <div style={{ height: '3rem' }} />
        </Layout>
    );
};

export default Resume;
