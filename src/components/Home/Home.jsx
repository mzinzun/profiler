import {useState} from 'react';
import "./Home.css";


const logos = ["bootstrap2.png","express2.png","react2.png","github2.png","lastmile2.png","linkedin2.png","zincom.png","nextchapter2.png","nodejs2.png","react2.png","bootstrap2.png","express2.png","github2.png","lastmile2.png","linkedin2.png","zincom.png","nextchapter2.png","react2.png","nodejs2.png","zincom.png","nextchapter2.png","lastmile2.png"]
console.log("logo's length", logos.length);
function Home(){
    const[winWidth, setWinWidth] = useState(window.innerWidth);
    const[winHeight, setWinHeight] = useState(window.innerHeight);
    console.log("window width and Height",winWidth,winHeight);
    console.log('random', Math.floor(Math.random()*logos.length)) 
    return (
        <div className='home'>
            {logos.map((el,idx)=>{
                let lefty = Math.floor(Math.random()* winWidth);
                let timer = (Math.random()*3)+4
                let delayer = (Math.random()* 3)+1;
                console.log(delayer)
                return (
                    <img key = {idx} className= 'img1' src={require(`../images/logos/${logos[idx]}`)} alt='bootstrap' style={{
                        left: lefty,
                        animation: `${timer}s ease-in ${delayer}s infinite img${idx}Floater`
                       }}/>
                )
            })}
            <aside></aside>
            <section className='homeImage'>
                {/* <img src="./images/me1.jpg" alt="pic of Mzinzun"/> */}
            </section>
        </div>
    )
}
export default Home;