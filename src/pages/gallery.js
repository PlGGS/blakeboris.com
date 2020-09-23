import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { motion } from "framer-motion"

const Gallery = () => (
    <Layout>
        <div id="intro">
            <h1>Gallery</h1>
            <p>A collection of some of my favorite photos I've taken over the years.</p>
        </div>
        <div className="container">
            <Image src="/path.jpg" width="1" height="1" />
            <Image src="/plant.jpg" width="1" height="1" />
            <Image src="/sunset.jpg" width="1" height="1" />
            <Image src="/cubs.jpg" width="2" height="1" />
            <Image src="/cold.jpg" width="1" height="1" />
            <Image src="/pond.jpg" width="3" height="2" />
            <Image src="/fog.jpg" width="1" height="3" />
            <Image src="/buds.png" width="1" height="2" />
            <Image src="/hancock.jpg" width="1" height="1" />
            <Image src="/sadness.jpg" width="1" height="1" />
            <Image src="/perspective.jpg" width="1" height="1" />
            <Image src="/lakeshore.jpg" width="1" height="1" />
            <Image src="/road.jpg" width="2" height="1" />
            <Image src="/spa.jpg" width="1" height="1" />
            <Image src="/vista.jpg" width="3" height="1" />
            <Image src="/pride.jpg" width="2" height="1" />
            <Image src="/punchout.jpg" width="1" height="1" />
            <Image src="/dock.jpg" width="1" height="1" />
            <Image src="/kieran.jpg" width="2" height="2" />
            <Image src="/love.jpg" width="1" height="1" />
            <Image src="/climber.jpg" width="3" height="2" />
            <Image src="/joy.jpg" width="1" height="2" />
            <Image src="/icefall.jpg" width="2" height="1" />
            <Image src="/T.jpg" width="2" height="1" />
            <Image src="/puzzle.jpg" width="1" height="1" />
            <Image src="/steps.jpg" width="1" height="1" />
            <Image src="/platform.png" width="1" height="2" />
            <Image src="/swing.png" width="2" height="1" />
            <Image src="/bridge.jpg" width="2" height="2" />
            <Image src="/wintrust.jpg" width="1" height="2" />
            <Image src="/dibs.png" width="1" height="2" />
            <Image src="/snowball.jpg" width="2" height="1" />
            <Image src="/rock.jpg" width="2" height="1" />
            <Image src="/tree.jpg" width="2" height="2" />
            <Image src="/sixflags.jpg" width="1" height="1" />
            <Image src="/r2s.jpg" width="1" height="1" />
        </div>
        <style>{`
            #intro {
                width: 60%;
                margin: 2% 20% 2% 20%;
            }

            #intro p {
                font-size: 13px;
                color: #8d8d8d;
                margin-top: 30px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 1px;
            }

            .container{
                margin: auto auto 100px auto;
                text-align: center;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-auto-rows:200px 400px;
                grid-gap:10px;
                grid-auto-flow: dense;
            }

            #gallery-item {
                width:100%;
                height:100%;
                position:relative;
            }

            .w-1{
                grid-column: span 1;
            }
            .w-2{
                grid-column: span 2;
            }
            .w-3{
                grid-column: span 3;
            }
            .w-4{
                grid-column: span 4;
            }
            .w-5{
                grid-column: span 5;
            }
            .w-6{
                grid-column: span 6;
            }
            
            .h-1{
                grid-row: span 1;
            }
            .h-2{
                grid-row: span 2;
            }
            .h-3{
                grid-row: span 3;
            }
            .h-4{
                grid-row: span 4;
            }
            .h-5{
                grid-row: span 5;
            }
            .h-6{
                grid-row: span 6;
            }
            
            #image {
                width:100%;
                height:100%;
                overflow:hidden;
            }
            
            #image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 50%;
                cursor: pointer;
                transition: 0.5s ease-in-out;
            }
            #gallery-item:hover {
                transition: .3s ease-in-out;
                -webkit-backdrop-filter: blur(5px) saturate(1.8);
                backdrop-filter: blur(5px) saturate(1.8);
            }
            
            @media screen and (max-width:500px){
                .container{
                    grid-template-columns: repeat(1,1fr);
                }
                .w-1,.w-2,.w-3,.w-4,.w-5,.w-6{
                    grid-column:span 1;
                }
            }

            @media (max-device-width : 1080px) {
                #intro {
                    margin: 10%;
                }
                #intro h1 {
                    font-size: 24px;
                }
                #intro p {
                    font-size: 12px;
                }

                #contact {
                    padding: 0px;
                }
                #contact h1 {
                    font-size: 30px;
                }
                #contact p {
                    font-size: 40px;
                }
            }
        `}</style>
    </Layout>
);

function Image({ src, width, height }) {
    const router = useRouter();
    let cls = `w-${width} h-${height}`;

    const handleClick = (e) => {
        e.preventDefault()
        router.push(src)
    }

    return (
        <motion.div className={cls}
            whileHover={{ scale: 1.02 }}
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
            <div id="gallery-item">
                <div id="image">
                    <a href={src} onClick={handleClick}>
                        <img src={src} alt={src}></img>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default Gallery;