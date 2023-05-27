import { useEffect, useState } from 'react';
import "./Home.css";
import site1 from "./fontawesome.png";
import site2 from "./mikesRemodel.png";
import site3 from "./capstone.png";
import site4 from "./zincom.png";

function Home(props) {

    const [homeOpacity, setHomeOpacity] = useState(0);
    useEffect(() => {
        console.log('Home Component is Loaded');
        const bioPage = document.querySelector('.home');
        setHomeOpacity(1);
        props.setlogosOpacity(1);
    }, [])
    return (
        <>
            <div className='home' style={{ opacity: homeOpacity }}>

                <div className="sampleSites row m-0 p-0 ">
                    <section className="col-md-3">
                        <h3>FontAwesome App</h3>
                        <img src={site1} className='sites' />
                    </section>
                    <section className="col-md-3">
                        <h3>Mikes Remodeling</h3>
                        <img src={site2} className='sites' />
                    </section>
                    <section className="col-md-3">
                        <h3>Zincom Web</h3>
                        <img src={site3} className='sites' />
                    </section>
                    <section className="col-md-3">
                        <h3>Zincom CS</h3>
                        <img src={site4} className='sites' />
                    </section>
                </div>
            </div>
        </>

    )
}
export default Home;

function SampleSites(props) {

}