import {useState} from 'react';
import "./Home.css";


const logos = ["bootstrap.jpg","express.jpg","github.png","lastmile.png","linkedin.jpg","zincom.png","nextchapter.png","nodejs.png","nodejs2.jpg","react.png","bootstrap.jpg","express.jpg","github.png","lastmile.png","linkedin.jpg","zincom.png","nextchapter.png","nodejs.png","nodejs2.jpg","react.png"]

function Home(){
    const[winWidth, setWinWidth] = useState(window.innerWidth);
    const[winHeight, setWinHeight] = useState(window.innerHeight);
    console.log("window width and Height",winWidth,winHeight);
    // .img1 {
    //     width: 100px;
    //     height: 100px;
    //     left: 120px;
    //     position: absolute;
    //     z-index: 1;
    //     animation: 5s ease-in 1s infinite img1Floater;
    // }
    // function setCSS(left,imgNum){
    //     let style = `left: ${left}`;
    //     let cName= `img${imgNum}`;
    //     return <img className = {cName} src={require(`../images/logos/${logos[imgNum]}`)} alt='bootstrap' style={{left: `${left}`}}/>
    //      {
    //         width: '100px';
    //         height: '100px';
    //         left: '120px';
    //         position: 'absolute';
    //         z-index: 1;
    //         animation: '5s ease-in 1s infinite img1Floater';
    //     }
    // }
    // let res = setCSS('300px',1);
    console.log('random', Math.floor(Math.random()*logos.length)) 
    return (
        <div className='home'>
            {/* <img className='img1' src={require(`../images/logos/${logos[0]}`)} alt='bootstrap' /> */}

            {logos.map((el,idx)=>{
                let lefty = Math.floor(Math.random()* winWidth);
                let timer = (Math.random()*3)+4
                let delayer = (Math.random()* 3)+1;
                console.log(delayer)
                return (
                    <img key = {idx} src={require(`../images/logos/${logos[idx]}`)} alt='bootstrap' style={{
                        top: '-25%',
                        left: lefty,
                        width: "100px",
                        height: "100px",
                        position: "absolute",
                        zIndex : 1,
                        animation: `5s ease-in ${delayer}s infinite img${idx}Floater`
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