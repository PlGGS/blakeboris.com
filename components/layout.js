import Head from 'next/head';
import Navbar from './navbar';

const layout = (props) => (
    <div>
        <Head>
            <title>Blake Boris</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        {props.children}
    </div>
);

export default layout;