import Layout from '../components/layout';

const Gallery = () => (
    <Layout>
        
        <div id="intro">
            <h1>Gallery</h1>
            <p>This will be where you can view my art!</p>
        </div>
        <style>{`
            #intro {
                width: 60%;
                margin: 2% 20% 2% 20%;
            }

            #intro p {
                font-size: 13px;
                color: #8d8d8d;
                margin-top: 30px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 1px;
                width: 40%;
            }
        `}</style>
    </Layout>
);

export default Gallery;