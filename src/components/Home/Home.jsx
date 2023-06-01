import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
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
    }, []);
    const msg1 = console.log('msg1 clicked');
    const[msg,setMesg]= useState(msg1);
    const[display,setDisplay] = useState('none');
    const[site, setSite]= useState('')
    function handleDisplay(e){
        setDisplay('block');
        console.log(e.target.attributes.dataname.value);

        setSite(e.target.attributes.dataname.value)

    }
    return (
            <div className='home' style={{ opacity: homeOpacity }}>
                <div className="temporaryNotice text-center" style={{display: display}}>
                    <h3 className="text-center p-4">Access to {site} Coming Soon</h3>
                    <button className="btn btn-info"type ="button" onClick={()=>{setDisplay('none')}}>OK</button>
                </div>
                <div className="sampleSites row m-0 p-4 align-items-end">
                    <section className="col-md-3 mt-5 mt-md-0" >
                        <h3>FontAwesome App</h3>
                        <img src={site1} className='px-5 px-md-0 sites' dataname = "FontAwesome App" onClick={handleDisplay}/>
                    </section>
                    <section className="col-md-3">
                        <h3>Mikes Remodeling</h3>
                        <img src={site2} className='px-5 px-md-0 sites' dataname = "Mike's Remodeling Site" onClick={handleDisplay}/>
                    </section>
                    <section className="col-md-3">
                        <h3>Zincom Web</h3>
                        <img src={site3} className='px-5 px-md-0 sites' dataname = "Zincom Web Site" onClick={handleDisplay}/>
                    </section>
                    <section className="col-md-3">
                        <h3>Zincom CS</h3>
                        <img src={site4} className='px-5 px-md-0 sites' dataname = "Zincom Computer Solution Site" onClick={handleDisplay}/>
                    </section>
                </div>
            </div>

    )
}
export default Home;

