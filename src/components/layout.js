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
            <div className="container">
                {props.children}
            </div>
        </div>
        <style jsx>{`
            #front {
                padding-top: 30px;
                padding-left: 100px;
                background: #fafafa;
                width: 100%;
                height: 92.1vh;
            }
            .container {
                // background: red;
            }
        `}</style>
    </div>
);

export default Layout;