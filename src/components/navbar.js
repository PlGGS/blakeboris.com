import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';

const Navbar = () => (
    <div id="bar">
        <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charSet="utf-8" />
        <div id="resources">
            <container id="home">
                <ul>
                    <li><Link href="/"><b>Blake Boris</b></Link></li>
                </ul>
            </container>
        </div>
        <container id="pages">
            <ul>
                <li>
                    {/* <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{
                            opacity: 0,
                            border: 0
                        }}
                        animate={{
                            opacity: 1,
                            scale: [1, 0.9, 1, 1.2, 1.1, 1]
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1
                        }}
                    >
                    
                    </motion.button> */}
                    <Link href="/" under='true'>Home</Link>
                </li>
                <li><Link href="/portfolio" under='true'>Portfolio</Link></li>
                <li><Link href="/resume" under='true'>Resume</Link></li>
                <li><Link href="/contact" under='true'>Contact</Link></li>
                <li><Link href="/gallery" under='true'>Gallery</Link></li>
            </ul>
        </container>
        <div id="resources">
            <container id="sites">
                <table>
                    <tbody>
                        <tr>
                            <td><a href="https://www.github.com/plggs/"><FontAwesomeIcon icon={faGithub} /></a></td>
                            <td><a href="https://www.linkedin.com/in/blakeboris/"><FontAwesomeIcon icon={faLinkedin} /></a></td>
                            <td><a href="https://www.instagram.com/blakeboris_/"><FontAwesomeIcon icon={faInstagram} /></a></td>
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
            #home ul li a b {
                font-size: 24px;
            }
            #pages ul li a {
                font-size: 24px;
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