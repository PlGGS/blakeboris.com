import Layout from '../components/layout';

const Contact = () => (
    <Layout>
        <div id="intro">
            <h1>Contact</h1>
            <p>Here's where you can currently contact me.</p>
        </div>
        <div id="contact">
            <h1>Email me at <a href="mailto:bbor0422@gmail.com">bbor0422@gmail.com</a></h1>
            <br/>
            <h1>Call or text me at <a href="tel:6308412502">(630)-841-2502</a></h1>
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

            #contact {
                width: 60%;
                margin: 0 auto;
                padding: 150px;
                text-align: center;
            }
        `}</style>
    </Layout>
);

export default Contact;