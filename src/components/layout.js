import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Blake Boris</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div id="front">
            {props.children}
        </div>
        <style jsx>{`
            #front {
                padding-top: 30px;
                padding-left: 100px;
                padding-right: 100px;
                background: #fafafa;
                width: 100%;
            }
            .container {
                // background: red;
            }
        `}</style>
    </div>
);

export default Layout;