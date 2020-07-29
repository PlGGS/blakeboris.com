import Layout from '../components/layout';
import { motion } from "framer-motion"

const moveDuration = 2.5;

const Index = () => (
    <Layout>
        <div id="body">
            <table>
                <tbody>
                    <tr>
                        <td>
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
                padding-top: 30px;
                padding-left: 100px;
                padding-right: 100px;
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
            .middle {
            }
            .inner {
            }
        `}</style>
    </Layout>
);

export default Index;