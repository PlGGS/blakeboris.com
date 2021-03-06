import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

const picHeight = '202px';

const Project = (props) => (
    <Layout>
        <div id="project">
            <div id="intro">
                <div id="header">
                    <div id="item">
                        <a className="button" href={props.url}>View project on GitHub</a>
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
            <div className="container">
                {props.writeup}
            </div>
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
            }
            .button:hover {
                color: white;
                background-color: #18bc9c;
                border: 2px solid #18bc9c;
            }

            #pics {
                padding-top: 50px;
                text-align: center;
            }

            .container div {
                margin: auto auto 100px auto;
            }
            
            .container div h2 {
                padding-top: 10px;
                padding-bottom: 5px;
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
                    padding: 1px 4px;
                    transform: translate(0px, -11px);
                }
                
                #pic0 {
                    display: none;
                }
                #pic1 {
                    transform: translate(-2%, 0px);
                }
                #pic2 {
                    display: none;
                }
            }
        `}</style>
        </div>
    </Layout>
);

function Link({ children, name, under }) {
    const router = useRouter();
    const href = '/projects/' + name;
    const style = {
        'text-decoration': 'none',
        color: '#333'
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}

function ResizeImages({ name, amt }) {
    var imgs = '<table style="">';
    for (var o = 0; o < amt; o++) {
        imgs += `<td><img src='/${name}/${name}${o}.jpg' style="height: 275px"/></td>`
    }
    imgs += '</table>';

    return (<div dangerouslySetInnerHTML={{ __html: imgs }} />);
}

export default Project;