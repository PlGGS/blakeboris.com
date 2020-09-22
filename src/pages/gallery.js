import Layout from '../components/layout';

const Gallery = () => (
    <Layout>
        <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
        <div id="intro">
            <h1>Gallery</h1>
            <p>This is a collection of photos I've taken over the years.</p>
        </div>
        <div class="container">
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
            <Image src="/icefall.jpg" width="2" height="1" />
            <Image src="/joy.jpg" width="1" height="2" />
            <Image src="/puzzle.jpg" width="2" height="1" />
            <Image src="/steps.jpg" width="1" height="1" />
            <Image src="/T.jpg" width="1" height="1" />
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
                width: 40%;
            }

            .container{
                margin: auto auto 100px auto;
                text-align: center;
                 display:grid;
                grid-template-columns: repeat(3, 1fr);
                grid-auto-rows:200px 400px;
                grid-gap:10px;
                grid-auto-flow: dense;
            }

            .gallery-item {
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
            
            .image {
                width:100%;
                height:100%;
                overflow:hidden;
            }
            
            .image img {
                width:100%;
                height:100%;
                object-fit: cover;
                object-position:50% 50%;
                cursor:pointer;
                transition:.5s ease-in-out;
            }
            .gallery-item:hover #image img {
                opacity: 0#5;
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
        `}</style>
    </Layout>
);

function Image({ src, width, height }) {
    let cls = `w-${width} h-${height}`;
    
    return (
        <div class={cls}>
            <div class="gallery-item">
                <div class="image">
                    <img src={src} alt={src} />
                </div>
            </div>
        </div>
    );
}

export default Gallery;