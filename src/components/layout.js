import Head from "next/head";
import Navbar from "./navbar";

const Layout = (props) => (
    <>
        <Head>
            <title>Blake Boris</title>
            <link rel="favicon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div id="front">{props.children}</div>
    </>
);

export default Layout;
