import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Preview = (props) => (
    <>
        <div id="project" style={{ borderColor: props.color }}>
            <link
                rel="stylesheet"
                href="https://indestructibletype.com/fonts/Jost.css"
                type="text/css"
                charSet="utf-8"
            />
            <Link name={props.name}>
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    initial={{
                        opacity: 0,
                        border: 0,
                    }}
                    animate={{
                        opacity: [0.2, 0.3, 0.4, 0.6, 0.8, 0.9, 1],
                        scale: [0.99, 1],
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.1,
                    }}
                >
                    <div id="overlay">
                        <div style={{ background: props.color }}>
                            <ResizeImages
                                name={props.name}
                                amt={props.amt}
                            ></ResizeImages>
                        </div>
                    </div>
                </motion.div>
                <div id="nameAndDesc" style={{ listStyleType: "none" }}>
                    {props.children}
                </div>
            </Link>
            <style jsx>{`
                #project {
                    overflow: hidden;
                    border-radius: 15px;
                    border-style: solid;
                    margin: 1% 20% 1% 20%;
                    width: 57%;
                    height: 275px;
                    position: relative;
                    float: left;
                    opacity: 1;
                }
                #overlay {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    color: white;
                    opacity: 0.3;
                    top: 0;
                    z-index: 2;
                    -webkit-transition: all 0.2s ease-in;
                    -moz-transition: all 0.2s ease-in;
                    -ms-transition: all 0.2s ease-in;
                    -o-transition: all 0.2s ease-in;
                    transition: all 0.2s ease-in;
                }
                #overlay:hover {
                    color: black;
                    opacity: 0.6;
                    text-color: white;
                }
                #overlay h1:hover {
                    color: white;
                }

                #nameAndDesc {
                    z-index: 1;
                    list-style-type: none;
                    opacity: 1;
                    background-color: transparent;
                }
                #nameAndDesc:hover {
                }

                #project h1 {
                    padding: 15px;
                }

                #project p {
                    padding: 15px;
                    margin: 140px auto 0 0;
                }

                @media (max-device-width: 1080px) {
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

                @media (max-device-width: 1080px) {
                    #project {
                        height: 110px;
                        width: 90%;
                        margin: auto;
                    }

                    #nameAndDesc {
                        font-size: 10px;
                    }

                    #intro {
                        margin: 10%;
                    }
                    #intro h1 {
                        font-size: 24px;
                    }
                    #intro p {
                        font-size: 12px;
                    }

                    #overlay {
                        padding: 0px;
                        margin: 0 0 0 0;
                        height: 100px;
                    }
                    #project h1 {
                        font-size: 30px;
                    }
                    #project p {
                        font-size: 20px;
                    }
                }
            `}</style>
        </div>
    </>
);

function Link({ children, name, under }) {
    const router = useRouter();
    const href = "/projects/" + name;
    const style = {
        textDecoration: "none",
        color: "#333",
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    );
}

function ResizeImages({ name, amt }) {
    var imgs = `<table>`;
    for (var o = 0; o < amt; o++) {
        imgs += `<td><img src='/${name}/${name}${o}.jpg' style="height: 275px;"/></td>`;
    }
    imgs += "</table>";

    return <div dangerouslySetInnerHTML={{ __html: imgs }} />;
}

export default Preview;
