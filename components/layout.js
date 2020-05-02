import Navbar from './navbar';

const layout = (props) => (
    <div>
        <Navbar/>
        {props.children}
    </div>
);

export default layout;