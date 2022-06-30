import Layout from "../components/layout";
import { motion } from "framer-motion";

const moveDuration = 2;

const Index = () => (
    <Layout>
        <div id="body">
            <div id="mid">
                <div id="intro">
                    <motion.div
                        initial={{
                            x: -1500,
                            y: 0,
                        }}
                        animate={{
                            x: 0,
                            y: 150,
                        }}
                        transition={{
                            duration: moveDuration,
                            delay: 0.2,
                        }}
                    >
                        <h1>
                            Hello there, I'm <b>Blake Boris</b>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{
                            x: -1500,
                            y: 0,
                        }}
                        animate={{
                            x: 0,
                            y: 150,
                        }}
                        transition={{
                            duration: moveDuration,
                            delay: 0.3,
                        }}
                    >
                        <h4>I'm a software engineer.</h4>
                    </motion.div>
                </div>
                <div id="pic">
                    <motion.div
                        initial={{
                            x: 1500,
                            y: 0,
                        }}
                        animate={{
                            x: 0,
                            y: 150,
                        }}
                        transition={{
                            duration: moveDuration,
                            delay: 0.4,
                        }}
                    >
                        <img src="/blake.png" alt="blake" align="right"></img>
                    </motion.div>
                </div>
            </div>
        </div>
        <style jsx>{`
            #body {
                padding-left: 10%;
                padding-right: 10%;
                overflow: hidden;
            }
            #body table {
                position: relative;
                margin: 0 auto;
            }
            #body img {
                width: 400px;
                border-radius: 50%;
            }
            #body {
                padding: 20px;
                padding-bottom: 150px;
            }

            #mid {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #intro {
                padding: 2%;
                /* transform: translate(0px, 150px); */
            }
            #pic {
                padding: 2%;
            }

            /* @media (max-device-width: 1080px) {
                #body table tbody tr td img {
                    width: 100%;
                    border-radius: 50%;
                }
                #body table {
                    padding-left: 10%;
                    padding-right: 10%;
                }
            } */

            @media (max-device-width: 1080px) {
                #body {
                    display: flex;
                    flex-flow: column;
                }
                #body img {
                    border-radius: 50%;
                }

                #intro {
                    position: absolute;
                    bottom: 0;
                }
                #mid {
                }

                #pic {
                    padding: 0px;
                    order: 1;
                    transform: translate(0px, calc(-10vh));
                }
                #pic img {
                    width: 314px;
                }
                #intro {
                    padding: 0px;
                    order: 2;
                    transform: translate(0px, calc(-40vh));

                    text-align: center;
                }
                #intro h4 {
                    padding-top: 10px;
                    font-size: 18pt;
                }
            }

            @media screen and (max-height: 750px) {
                #pic img {
                    transform: translate(0px, -20px);
                    width: 220px;
                }
            }
        `}</style>
    </Layout>
);

export default Index;
