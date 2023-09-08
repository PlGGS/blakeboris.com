import Layout from "../components/layout";
import { useRouter } from "next/router";

const picHeight = "202px";

const Project = (props) => (
    <Layout>
        <div id="project">
            <div id="intro">
                <div id="header">
                    <div id="item">
                        <a className="button" href={props.url}>
                            View project on GitHub
                        </a>
                    </div>
                    <div id="item">
                        <h1>{props.name}</h1>
                        <p>{props.desc}</p>
                    </div>
                </div>

                <div id="pics">
                    <img id="pic0" src={props.pic0} height={picHeight} />
                    <img id="pic1" src={props.pic1} height={picHeight} />
                    <img id="pic2" src={props.pic2} height={picHeight} />
                </div>
            </div>
            <div className="container">{props.writeup}</div>
            <style>{`
            #intro {
                width: 60%;
                margin: 2% 20% 2% 20%;
                float: center;
                align-content: center;
            }

            #intro p {
                font-size: 13px;
                color: #8d8d8d;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 1px;
            }

            #header {
            }

            #buttonWrapper {
                float: right;
                text-align: right;
            }

            .button {
                float: right;
                background-color: white; 
                color: black;
                border: 2px solid #000;
                padding: 8px 16px;
                text-decoration: none;
                font-size: 16px;
                margin: 5px 4px;
                transition-duration: 0.4s;
                cursor: pointer;
                border-radius: 7px;
                transform: translate(0px, 1px);
            }
            .button:hover {
                color: white;
                background-color: #18bc9c;
                border: 2px solid #18bc9c;
            }

            #pics {
                padding-top: 50px;
                text-align: center;
                width: 100%;
                display: flex;
                justify-content: center;
            }

            .container {
                width: 60%;
            }
            .container div {
                margin: auto auto 100px auto;
            }
            .container div h2 {
                text-decoration: underline;
                padding-top: 10px;
                padding-bottom: 15px;
            }
            
            @media screen and (max-width:500px){
                .container{
                    grid-template-columns: repeat(1,1fr);
                }
                .w-1,.w-2,.w-3,.w-4,.w-5,.w-6{
                    grid-column:span 1;
                }
            }

            @media (max-device-width : 1080px) {
                #intro {
                    margin: 10%;
                    width: 81.5%;
                }
                #intro h1 {
                    font-size: 24px;
                }
                #intro p {
                    font-size: 12px;
                }

                .button {
                    padding: 4px 4px;
                    transform: translate(0px, -10px);
                    text-align: center;
                    width: 100%;
                }
                
                #pic0 {
                    display: none;
                }
                #pic1 {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    
                    transform: translate(-1%, 0px);
                }
                #pic2 {
                    display: none;
                }

                .container {
                    width: 81.5%;
                }
                .container div h2 {
                    font-size: 22pt;
                }
            }
        `}</style>
        </div>
    </Layout>
);

function ResizeImages({ name, amt }) {
    var imgs = '<table style="">';
    for (var o = 0; o < amt; o++) {
        imgs += `<td><img src='/${name}/${name}${o}.jpg' style="height: 275px"/></td>`;
    }
    imgs += "</table>";

    return <div dangerouslySetInnerHTML={{ __html: imgs }} />;
}

export default Project;
