import Layout from '../components/layout';
import { motion } from "framer-motion"

const moveDuration = 2;

const Index = () => (
    <Layout>
        <div id="body">
            <table>
                <tbody>
                    <tr>
                        <td id="intro">
                            <motion.div
                                initial={{
                                    x: -1500,
                                    y: 0
                                }}
                                animate={{
                                    x: 0,
                                    y: 150
                                }}
                                transition={{
                                    duration: moveDuration,
                                    delay: 0.2
                                }}
                            >
                                <h1>Hello there, I'm <b>Blake Boris</b></h1>
                            </motion.div>
                            <motion.div 
                                initial={{
                                    x: -1500,
                                    y: 0
                                }}
                                animate={{
                                    x: 0,
                                    y: 150
                                }}
                                transition={{
                                    duration: moveDuration,
                                    delay: 0.3
                                }}
                            >
                                <h4>I'm a software engineer.</h4>
                            </motion.div>
                        </td>
                        <td>
                            <motion.div
                                initial={{
                                    x: 1500,
                                    y: 0
                                }}
                                animate={{
                                    x: 0,
                                    y: 150
                                }}
                                transition={{
                                    duration: moveDuration,
                                    delay: 0.4
                                }}
                            >
                                <img src="/blake.png" alt="blake" align="right"></img>
                            </motion.div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <style jsx>{`
            #body {
                padding-left: 5%;
                padding-right: 5%;
                overflow: hidden;
            }
            #body table {
                position: relative;
                margin: 0 auto;
            }
            #body table tbody tr td img {
                width: 400px;
                border-radius: 50%;
            }
            #body table tbody tr td {
                padding: 20px;
                padding-bottom: 150px;
            }

            @media (max-device-width : 1080px) {
                #body table tbody tr td img {
                    width: 100%;
                    border-radius: 50%;
                }
                #body table {
                    padding-left: 10%;
                    padding-right: 10%;
                }
                #intro h1 {
                }
                #intro h4 {
                }
            }

            @media (max-device-width: 1024px) {
                transform: translate(0%, -2%);
            }
        `}</style>
    </Layout>
);

export default Index;