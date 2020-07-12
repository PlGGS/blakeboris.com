import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const navbar = () => (
    <div id="bar">
        <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charSet="utf-8" />
        <div id="resources">
            <container id="home">
                <ul>
                    <li><Link href="/"><a><b>Blake Boris</b></a></Link></li>
                </ul>
            </container>
        </div>
        <container id="pages">
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/resume"><a>Resume</a></Link></li>
                <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
                <li><Link href="/gallery"><a>Gallery</a></Link></li>
            </ul>
        </container>
        <div id="resources">
            <container id="sites">
                <table>
                    {/* TODO: fix these icons */}
                    <tr>
                        <td><a href="https://www.github.com/plggs/"><FontAwesomeIcon icon={faGithub} /></a></td>
                        <td><a href="https://www.linkedin.com/in/blake-boris/"><FontAwesomeIcon icon={faLinkedin} /></a></td>
                        <td><a href="https://www.instagram.com/blakeboris_/"><FontAwesomeIcon icon={faInstagram} /></a></td>
                    </tr>
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
            #sites table tr td {
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

export default navbar;