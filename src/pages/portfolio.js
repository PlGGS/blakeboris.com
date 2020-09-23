import Layout from '../components/layout';
import Preview from '../components/preview';

const Portfolio = () => (
    <Layout>
        <div id="content">
            <div id="intro">
                <h1>Portfolio</h1>
                <p>A few of my favorite projects I've worked on over the years.</p>
            </div>
            <ul id="grid">
                <Preview name="r2" color="#2599f7" amt="6">
                    <li>
                        <div id="project">
                            <h1>R2D2B2</h1>
                            <p>An Amazon Echo integrated application for adding features to Hasbro R2D2 via Raspberry Pi.</p>
                        </div>
                    </li>
                </Preview>
                <Preview name="emi" color="#4f27e3" amt="4">
                    <li>
                        <div id="project">
                            <h1>Eldewrito Multi Instance</h1>
                            <p>A modular launcher for ElDewrito 0.6+ that allows for a split screen like experience.</p>
                        </div>
                    </li>
                </Preview>
                <Preview name="docs" color="#1d29a3" amt="4">
                    <li>
                        <div id="project">
                            <h1>V9 Documentation</h1>
                            <p>Documentation for the V9 Platform using ESDoc, a JavaScript Documentation generator.</p>
                        </div>
                    </li>
                </Preview>
            </ul>
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
            }
            
            #project h1 {
                padding: 15px;
            }

            #project p {
                padding: 15px;
                margin: 140px auto 0 0;
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

                #project {
                    padding: 0px;
                }
                #project h1 {
                    font-size: 30px;
                }
                #project p {
                    font-size: 40px;
                }
            }
        `}</style>
    </Layout>
);

export default Portfolio;