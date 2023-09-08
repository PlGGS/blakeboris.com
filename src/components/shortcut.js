import Layout from './layout';
import { motion } from "framer-motion"

const Shortcut = (props) => (
    <Link>
        <motion.div id="options"
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
            <h1>Home</h1>
            <h1>Portfolio</h1>
            <h1>Resume</h1>
            <h1>Contact</h1>
            <h1>Gallery</h1>
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

            #options {
                width: 60%;
                margin: 0 auto;
                padding: 150px;
                text-align: center;
            }

            @media (max-device-width : 1080px) {
                #options {
                    padding: 0px;
                    height: 100%;
                }
                #options h1 {
                    font-size: 30px;
                }
                #options p {
                    font-size: 40px;
                }
            }

            @media (max-device-width: 1024px) {
                transform: translate(0%, -2%);
            }
        `}</style>
    </Link>
);

export default Shortcut;