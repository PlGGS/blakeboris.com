import Link from 'next/Link';

const navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
        <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charset="utf-8" />
        {/* <style jsx>{`
            ul {
                padding: 10px;
                background: #333;
                color: #fff;
                list-style: none;
                display: flex;
            }
            ul li {
                font-size: 20;
                margin-right: 20px;
            }
            ul li a {
                color: #fff;
                text-decoration: none;
            }
        `}</style> */}
    </div>
);

export default navbar;