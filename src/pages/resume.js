import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Layout from '../components/layout';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer({ scale }) {
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
                    <Page pageNumber={pageNumber} renderTextLayer={false} scale={scale} />
                </div>
            </Document>
        </div>
    );
}

const Resume = () => {
    const [scale, setScale] = useState(1.3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1080) {
                setScale(0.6);
            } else {
                setScale(1.3);
            }
        };

        // Initial scale setting
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Layout>
            <PdfViewer scale={scale} />
            <style jsx>{`
                @media (max-width: 1080px) {
                    .pdf-container {
                        width: 80%;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default Resume;
