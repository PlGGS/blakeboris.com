import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import { motion } from "framer-motion"

const Navbar = () => (
    <div id="bar">
        <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charSet="utf-8" />
        <div id="resources">
            <container id="home">
                <ul>
                    <li><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.05 }}><Link href="/"><b>Blake Boris</b></Link></motion.div></li>
                </ul>
            </container>
        </div>
        <container id="pages">
            <ul>
                <li><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.02 }}><Link href="/" under='true'>Home</Link></motion.div></li>
                <li><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.02 }}><Link href="/portfolio" under='true'>Portfolio</Link></motion.div></li>
                <li><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.02 }}><Link href="/resume" under='true'>Resume</Link></motion.div></li>
                <li><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.02 }}><Link href="/contact" under='true'>Contact</Link></motion.div></li>
                <li><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.02 }}><Link href="/gallery" under='true'>Gallery</Link></motion.div></li>
            </ul>
        </container>
        <div id="resources">
            <container id="sites">
                <table>
                    <tbody>
                        <tr>
                            <td><motion.div whileHover={{ scale: 1.1 }}><a href="https://www.github.com/plggs/"><i id="icon"><FontAwesomeIcon icon={faGithub} /></i></a></motion.div></td>
                            <td><motion.div whileHover={{ scale: 1.1 }}><a href="https://www.linkedin.com/in/blakeboris/"><i id="icon"><FontAwesomeIcon icon={faLinkedin} /></i></a></motion.div></td>
                            <td><motion.div whileHover={{ scale: 1.1 }}><a href="https://www.instagram.com/blakeboris_/"><i id="icon"><FontAwesomeIcon icon={faInstagram} /></i></a></motion.div></td>
                        </tr>
                    </tbody>
                </table>
            </container>
        </div>
        <style jsx>{`
            #bar {
                padding: 20px;
                padding-bottom: 5px;
                background: #fff;
                list-style: none;
                display: flex;
            }
            #resources {
                margin: 0 auto;
            }
            #sites table tbody tr td {
                padding-top: 5px;
                padding-left: 10px;
                padding-right: 10px;
                width 42px;
                margin: 0 auto;
                color: #333;
            }
            #sites table tr td a {
                color: #333;
            }
            #sites table {
                padding-right: 3em;
            }
            container ul {
                list-style: none;
                padding-left: 0px;
                display: flex;
            }
            container ul li a {
                padding: 10px;
                font-size: 16px;
                color: #333;
            }
            #icon:hover {
                color: #18bc9c;
                -webkit-transition: all 0.2s ease-in;
                    -moz-transition: all 0.2s ease-in;
                    -ms-transition: all 0.2s ease-in;
                    -o-transition: all 0.2s ease-in;
                    transition: all 0.2s ease-in;
            }
        `}</style>
    </div>
);

function Link({ children, href, under }) {
    const router = useRouter()
    const style = {
        marginRight: 10,
        'text-decoration': under ? router.pathname === href ? 'underline' : 'none' : 'none',
        'font-size': '24px',
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

export default Navbar;