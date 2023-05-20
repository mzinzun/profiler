import {useEffect, useState} from 'react';
import "./Home.css";

function Home(props){
    const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight); 
  useEffect(()=>{
    console.log('Home Component is Loaded');
    props.setOpacity(1);

  },[])
    return (
        <div className='home'> 
        </div>
    )
}
export default Home;