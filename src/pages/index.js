import Layout from '../components/layout';

const Index = () => (
    <Layout>
        <div id="body">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h1>Hello there, I'm <b>Blake Boris</b></h1>
                            <h5>Hi, I'm a software engineer.</h5>
                        </td>
                        <td>
                            <img src="/blake.png" alt="blake" align="right"></img>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <style jsx>{`
            #body {
            }
            #body table tbody tr td {
            }
            #body table tbody tr td img {
                width: 400px;
                border-radius: 50%;
            }
            .middle {
            
            }
            .inner {
            
            }
        `}</style>
    </Layout>
);

export default Index;