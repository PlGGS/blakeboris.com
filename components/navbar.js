import Link from 'next/Link';

const navbar = () => (
    <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
    </ul>
);

export default navbar;