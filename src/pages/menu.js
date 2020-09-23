import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { motion } from "framer-motion"

const style = {
    triangle_down1: {
        position: 'relative',
        top: '-5px',
        display: 'inline-block',
        width: '15px',
        height: '15px',
        'border-right': '0.2em solid black',
        'border-top': '0.2em solid black',
        transform: 'rotate(135deg)',
        'margin-right': '0.5em',
        'margin-left': '1.0em',
    },
    triangle_up1: {
        position: 'relative',
        top: '-5px',
        display: 'inline-block',
        width: '15px',
        height: '15px',
        'border-right': '0.2em solid black',
        'border-top': '0.2em solid black',
        transform: 'rotate(-45deg)',
        'margin-right': '0.5em',
        'margin-left': '1.0em',
    }
}

const Menu = () => (
    <Layout>
        <motion.div id="options"
            initial={{
                opacity: 0,
                border: 0
            }}
            animate={{
                opacity: [0.2, 0.3, 0.4, 0.6, 0.8, 0.9, 1],
                scale: [0.91, 0.92, 0.93, 0.96, 0.98, 0.99, 1]
            }}
            transition={{
                duration: 0.5,
                delay: 0.1
            }}>
            <ul>
                <li id="page"><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.02 }}><Link href="/" under='true'>Home</Link></motion.div></li>
                <li id="page"><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.02 }}><Link href="/portfolio" under='true'>Portfolio</Link></motion.div></li>
                <li id="page"><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.02 }}><Link href="/resume" under='true'>Resume</Link></motion.div></li>
                <li id="page"><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.02 }}><Link href="/contact" under='true'>Contact</Link></motion.div></li>
                <li id="page"><motion.div initial={{ scale: [1.02, 1] }} whileHover={{ scale: 1.02 }}><Link href="/gallery" under='true'>Gallery</Link></motion.div></li>
            </ul>
        </motion.div>
        <style>{`
                #options {
                    text-align: center;
                }
                #page {
                    list-style-type: none;
                    transform: translate(-15px, 100%);
                }
            `}</style>
    </Layout>
);

function Link({ children, href, under }) {
    const router = useRouter();
    const style = {
        'fontSize': '42px',
        color: '#333'
    }

    const choose = (e) => {
        e.preventDefault()
        router.push(href)
    }

    const goBack = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={choose} style={style}>
            {children}
        </a>
    )
}

export default Menu;