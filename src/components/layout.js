import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Blake Boris</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
            <link rel="favicon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <div id="front">
            {props.children}
        </div>
        <style jsx>{`
            .container {
                // background: red;
            }
        `}</style>
    </div>
);

export default Layout;