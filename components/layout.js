import Head from 'next/head';
import Navbar from './navbar';

const layout = (props) => (
    <div>
        <Head>
            <title>Blake Boris</title>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default layout;