import Layout from '../components/layout';
import { motion } from "framer-motion"

const Contact = () => (
    <Layout>
        <div id="intro">
            <h1>Contact</h1>
            <p>Where you can currently contact me.</p>
        </div>
        <motion.div id="contact"
            initial={{
                opacity: 0,
                border: 0
            }}
            animate={{
                opacity: [0.2, 0.3, 0.4, 0.6, 0.8, 0.9, 1],
                scale: [0.91, 0.92, 0.93, 0.96, 0.98, 0.99, 1]
            }}
            transition={{
                duration: 0.5,
                delay: 0.1
            }}>
            <h1>Email me at: <motion.div whileHover={{ scale: 1.02 }}><a href="mailto:bbor0422@gmail.com">bbor0422@gmail.com</a></motion.div></h1>
            <br />
            <h1>Call or text me at: <motion.div whileHover={{ scale: 1.02 }}><a href="tel:6308412502">(630)-841-2502</a></motion.div></h1>
        </motion.div>
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
            }

            #contact {
                width: 60%;
                margin: 0 auto;
                padding: 150px;
                text-align: center;
            }

            @media (max-device-width : 1080px) {
                #intro {
                    margin: 10%;
                }
                #intro h1 {
                    font-size: 24px;
                }
                #intro p {
                    font-size: 12px;
                }

                #contact {
                    padding: 0px;
                    padding-top: 10%;
                    padding-bottom: 20%;
                    width: 100%;
                }
                #contact h1 {
                    font-size: 180%;
                }
                #contact h1 a {
                }
            }
        `}</style>
    </Layout>
);

export default Contact;