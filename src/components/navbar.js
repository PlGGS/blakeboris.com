import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navbar = (props) => (
    <div id="bar">
        <link
            rel="stylesheet"
            href="https://indestructibletype.com/fonts/Jost.css"
            type="text/css"
            charSet="utf-8"
        />
        <div id="resources">
            <div id="home">
                <ul>
                    <li>
                        <motion.div
                            style={{ paddingLeft: "10px" }}
                            initial={{ scale: [1.02, 1] }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link href="/">
                                <b>Blake Boris</b>
                            </Link>
                        </motion.div>
                    </li>
                </ul>
            </div>
        </div>
        <div id="pages">
            <ul>
                <li id="page">
                    <motion.div
                        initial={{ scale: [1.02, 1] }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Link href="/" under="true">
                            Home
                        </Link>
                    </motion.div>
                </li>
                <li id="page">
                    <motion.div
                        initial={{ scale: [1.02, 1] }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Link href="/portfolio" under="true">
                            Portfolio
                        </Link>
                    </motion.div>
                </li>
                <li id="page">
                    <motion.div
                        initial={{ scale: [1.02, 1] }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Link href="/resume" under="true">
                            Resume
                        </Link>
                    </motion.div>
                </li>
                <li id="page">
                    <motion.div
                        initial={{ scale: [1.02, 1] }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Link href="/contact" under="true">
                            Contact
                        </Link>
                    </motion.div>
                </li>
                <li id="page">
                    <motion.div
                        initial={{ scale: [1.02, 1] }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Link href="/gallery" under="true">
                            Gallery
                        </Link>
                    </motion.div>
                </li>
                <li id="menu">
                    <Menu href="/menu">
                        <motion.div
                            whileTap={{ rotate: -180 }}
                            initial={{ rotate: [180, 90, 0], scale: [1.02, 1] }}
                            whileHover={{ scale: 1.02 }}
                            style={{ originX: 0.6 }}
                        >
                            <div id="button"></div>
                        </motion.div>
                    </Menu>
                </li>
            </ul>
        </div>
        <div id="resources">
            <div id="sites">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    <a href="https://www.github.com/plggs/">
                                        <i id="icon">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </i>
                                    </a>
                                </motion.div>
                            </td>
                            <td>
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    <a href="https://www.linkedin.com/in/blakeboris/">
                                        <i id="icon">
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                            />
                                        </i>
                                    </a>
                                </motion.div>
                            </td>
                            <td>
                                <motion.div whileHover={{ scale: 1.1 }}>
                                    <a href="https://www.instagram.com/blakeboris_/">
                                        <i id="icon">
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                            />
                                        </i>
                                    </a>
                                </motion.div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {props.children}
        <style jsx>{`
            #bar {
                padding: 20px;
                padding-bottom: 5px;
                background: #fff;
                list-style: none;
                display: flex;
            }
            #pages {
                margin: 0 auto;
            }
            #button {
                display: none;
            }
            #resources {
            }
            #sites table tbody tr td {
                padding-top: 5px;
                padding-left: 10px;
                padding-right: 10px;
                width: 42px;
                margin: 0 auto;
                color: #333;
            }
            #sites table tr td a {
                color: #333;
            }
            #menu {
                display: none;
            }
            div ul {
                list-style: none;
                padding-left: 0px;
                display: flex;
            }
            #icon:hover {
                color: #18bc9c;
                -webkit-transition: all 0.2s ease-in;
                -moz-transition: all 0.2s ease-in;
                -ms-transition: all 0.2s ease-in;
                -o-transition: all 0.2s ease-in;
                transition: all 0.2s ease-in;
            }

            /* Smartphones (portrait and landscape) ----------- */
            @media (max-device-width: 1024px) {
                #page {
                    display: none;
                }
                #menu {
                    display: inherit;
                    transform: translate(-15%, 35%);
                }
                #button {
                    display: inherit;
                    position: relative;
                    top: -5px;
                    content: "";
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    border-right: 0.2em solid black;
                    border-top: 0.2em solid black;
                    transform: translate(-5px, 0px) rotate(135deg)
                        scale(1.4, 1.4);
                    margin-right: 0.5em;
                    margin-left: 1em;
                    -webkit-transition: all 0.2s ease-in;
                    -moz-transition: all 0.2s ease-in;
                    -ms-transition: all 0.2s ease-in;
                    -o-transition: all 0.2s ease-in;
                    transition: all 0.2s ease-in;
                }
            }
        `}</style>
    </div>
);

function Link({ children, href, under }) {
    const router = useRouter();
    const style = {
        marginRight: 10,
        textDecoration: under
            ? router.pathname === href
                ? "underline"
                : "none"
            : "none",
        fontSize: "24px",
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

function Menu({ children, href }) {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    );
}

export default Navbar;
