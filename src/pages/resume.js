import Layout from '../components/layout';

const Doc = (props) => {
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    });
        return <object id="doc" src={props.src} style={{ width: width, height: height - 84 }} type="text/html" data="https://docs.google.com/document/d/1RGYdukC4DySBY6IXJ9DQhSgoy-eJKM6jILPzs9R2eu0/edit?usp=sharing"></object>
};

const Resume = () => (
    <Layout>
        <Doc/>
        <style jsx>{`
            #doc {
            }
        `}</style>
    </Layout>
);

export default Resume;