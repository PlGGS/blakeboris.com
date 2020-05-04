import Link from 'next/Link';

const Navbar = () => (
    <div id="bar">
        <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charSet="utf-8" />
        <div id="resources">
            <container id="left-buttons">
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/resume"><a>Resume</a></Link></li>
                    <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                </ul>
            </container>
        </div>
        <container id="name-button">
            <ul>
                <li><Link href="/"><a>Blake Boris</a></Link></li>
            </ul>
        </container>
        <div id="resources">
            <container id="right-buttons">
                <ul>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                    <li><a href="https://github.com/PlGGS">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/blake-boris/">LinkedIn</a></li>
                </ul>
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
                padding-top: 6px;
                margin: 0 auto;
            }
            #left-buttons {
                float: left;
                
            }
            #name-button ul li a {
                font-size: 24px;
            }
            #right-buttons {
                align-items: right;
            }
            #right-buttons ul {
                padding-right: 2.5em;
            }
            container ul {
                list-style: none;
                display: flex;
            }
            container ul li a {
                padding: 10px;
                font-size: 16px;
                color: #333;
                text-decoration: none;
            }
        `}</style>
    </div>
);

export default Navbar;