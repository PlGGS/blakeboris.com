import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

<script>
    
</script>

const ProjectPreview = (props) => (
    <div id="project">
        <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charSet="utf-8" />
        <Link name={props.name}>
            <div id="nameAndDesc" style={{ 'list-style-type': 'none'}}>
                <div id="overlay" style={{ background: props.color}}>
                    <ResizeImages name={props.name} amt={props.amt}></ResizeImages>
                </div>
                {props.children}
            </div>
        </Link>
        <style jsx>{`
            #project {
                margin: 1% 20% 1% 20%;
                width: 57%;
                height: 275px;
                position: relative;
                float: left;
                opacity: 1;
            }
            #overlay {
                overflow: hidden;
                list-style-type: none;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                z-index: 2;
                opacity: 0.9;
                -webkit-transition: all 0.2s ease-in;
                    -moz-transition: all 0.2s ease-in;
                    -ms-transition: all 0.2s ease-in;
                    -o-transition: all 0.2s ease-in;
                    transition: all 0.2s ease-in; 
            }
            #overlay:hover{
                opacity: 0.2;
            }

            #nameAndDesc {
                overflow: hidden;
                list-style-type: none;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                z-index: 3;
                opacity: 0.8;
                -webkit-transition: all 0.2s ease-in;
                    -moz-transition: all 0.2s ease-in;
                    -ms-transition: all 0.2s ease-in;
                    -o-transition: all 0.2s ease-in;
                    transition: all 0.2s ease-in; 
            }
            #nameAndDesc:hover{
                opacity: 1;
            }
        `}</style>
    </div>
);

function Link({ children, name, under }) {
    const router = useRouter()
    const href = '/projects/' + name;
    const style = {
        'text-decoration': 'none',
        color: '#333'
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}

function ResizeImages({ name, amt }) {
    var imgs = '<table style="">';
    for (var o = 0; o < amt; o++) {
        imgs += `<td><img src='/${name}/${name}${o}.jpg' style="height: 275px"/></td>`
    }
    imgs += '</table>';

    return (<div dangerouslySetInnerHTML={{__html: imgs}} />);
}

export default ProjectPreview;