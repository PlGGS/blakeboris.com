import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/layout';

// react-pdf needs browser APIs (e.g. DOMMatrix), so only render it client-side
const PdfViewer = dynamic(() => import('../components/pdfViewer'), { ssr: false });

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
