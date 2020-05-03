import Layout from '../components/layout';

const index = () => (
    <Layout>
        <div id="front">
            <div className="container">
                <h1>Blake Boris</h1>
                <h5>Hi, I'm software engineer.</h5>
            </div>
        </div>
        <style jsx>{`
                #front {
                    padding: 30px;
                    background: #fafafa;
                    //background: url(https://colorlib.com/preview/theme/harbor/images/hero_1.jpg) 50% 100% no-repeat;
                    width: 100%;
                    height: 92.1vh;
                }
            `}</style>
    </Layout>
);

export default index;