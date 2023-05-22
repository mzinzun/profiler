import { useEffect, useState } from 'react';
import "./Home.css";

function Home(props) {
    const [homeOpacity, setHomeOpacity] = useState(0);
    useEffect(() => {
        console.log('Home Component is Loaded');
        const bioPage = document.querySelector('.home');
        setHomeOpacity(1);
        props.setlogosOpacity(1);
    }, [])
    return (
        <div className='home' style={{opacity: homeOpacity}}>
        </div>
    )
}
export default Home;