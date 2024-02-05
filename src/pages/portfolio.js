import Layout from "../components/layout";
import Preview from "../components/preview";

const Portfolio = () => (
    <Layout>
        <div id="content">
            <div id="intro">
                <h1>Portfolio</h1>
                <p>
                    A few of my favorite personal and group projects I've worked on over the years.
                </p>
            </div>
            <ul id="grid">
                <li className="item">
                    <Preview name="r2" color="#2599f7" amt="6">
                        <div id="item">
                            <div id="project">
                                <h1>R2D2B2</h1>
                                <p>
                                    An Amazon Echo integrated application for
                                    adding features to Hasbro R2D2 via Raspberry
                                    Pi.
                                </p>
                            </div>
                        </div>
                    </Preview>
                </li>
                <li className="item">
                    <Preview id="preview" name="spb" color="#1d29a3" amt="3">
                        <div id="project">
                            <h1>Scheduling Productivity Booster</h1>
                            <p>
                                A Next.js web application for synchronizing meetings across multiple teams at an organization.
                            </p>
                        </div>
                    </Preview>
                </li>
                <li className="item">
                    <Preview id="preview" name="pad" color="#1d29a3" amt="3">
                        <div id="project">
                            <h1>Photo A Day</h1>
                            <p>
                                A multi-platform mobile application made with Flutter for logging a picture of yourself once per day.
                            </p>
                        </div>
                    </Preview>
                </li>
                <li className="item">
                    <Preview id="preview" name="tx" color="#1d29a3" amt="3">
                        <div id="project">
                            <h1>TacticsX</h1>
                            <p>
                                A 2.5D tactical turn-based brawler created in Unity.
                            </p>
                        </div>
                    </Preview>
                </li>
                <li className="item">
                    <Preview id="preview" name="bell" color="#1d29a3" amt="3">
                        <div id="project">
                            <h1>Bell</h1>
                            <p>
                                An iOS application written in SwiftUI for tracking CTA L train cars in near real-time.
                            </p>
                        </div>
                    </Preview>
                </li>
                <li className="item">
                    <Preview id="preview" name="bblog" color="#1d29a3" amt="3">
                        <div id="project">
                            <h1>BBlog</h1>
                            <p>
                                A fullstack blog site built using the Leptos web framework in Rust.
                            </p>
                        </div>
                    </Preview>
                </li>
                <li className="item">
                    <Preview id="preview" name="emi" color="#4f27e3" amt="4">
                        <div id="project">
                            <h1>Eldewrito Multi Instance</h1>
                            <p>
                                A modular launcher for ElDewrito 0.6+ that
                                allows for a split screen like experience.
                            </p>
                        </div>
                    </Preview>
                </li>
                <li className="item">
                    <Preview id="preview" name="docs" color="#1d29a3" amt="4">
                        <div id="project">
                            <h1>V9 Documentation</h1>
                            <p>
                                Documentation for the V9 Platform using ESDoc, a
                                JavaScript Documentation generator.
                            </p>
                        </div>
                    </Preview>
                </li>
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
            
            #grid .item {
                list-style: none;
                padding-bottom: 120px;
            }
            #project:hover {
                color: white;
            }
            #project h1 {
                padding: 15px;
                opacity: 1;
                font-size: 20px;
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
            }
        `}</style>
    </Layout>
);

export default Portfolio;
