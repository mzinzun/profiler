import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Header from "../components/Header";
import Home from "../components/Home";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import './App.css';
const logos = ["bootstrap2.png","express2.png","react2.png","github2.png","lastmile2.png","linkedin2.png","zincom.png","nextchapter2.png","nodejs2.png","react2.png","bootstrap2.png","express2.png","github2.png","lastmile2.png","linkedin2.png","zincom.png","nextchapter2.png","react2.png","nodejs2.png","zincom.png","nextchapter2.png","lastmile2.png"]
function App(props) {
  const [opacity, setOpacity] = useState(0);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight);
  useEffect(()=>{
    console.log('App Component is Loaded');
    setOpacity(1);

  },[]);
  function handleBioPage(){
    console.log('bio click handler works!!');
    const bioDiv = document.querySelector('fillerDive');
    
  }
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <nav>
          <ul className='menu navbar justify-content-space-evenly;'>
            <Link to='/home'><li>Home</li></Link>
            <Link to='/bio'><li>Bio</li></Link>
            <Link to='/resume'><li>Resume</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <Link onClick={handleBioPage}><li>Show Bios</li></Link>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route exact path  ="/" element={<Home setOpacity = {setOpacity} opacity={opacity}/>} />
            <Route exact path  ="/home" element={<Home setOpacity = {setOpacity} opacity={opacity}/>} />
            <Route exact path ="/bio" element={<Bio setOpacity = {setOpacity} opacity={opacity}/>} />
            <Route exact path="/resume" element={<Resume setOpacity = {setOpacity} opacity={opacity}/>} />
            <Route exact path="/contact" element={<Contact setOpacity = {setOpacity} opacity={opacity}/>} />
            <Route path="/*" element={<Home />} />
          </Routes>
          <div className = 'fillerDiv'>
          {logos.map((el,idx)=>{
                let lefty = Math.floor(Math.random()* winWidth);
                let timer = (Math.random()*3)+4
                let delayer = (Math.random()* 3)+1;
                // console.log(delayer)
                return (
                    <img key = {idx} className= 'img1' src={require(`./images/logos/${logos[idx]}`)} alt='bootstrap' style={{
                        left: lefty,
                        opacity: opacity,
                        animation: `${timer}s ease-in ${delayer}s infinite img${idx}Floater`
                       }}/>
                )
            })}
          </div>
        </main>
        <footer className = "row m-0 p-0 px-2 justify-content-between align-items-center">
          <h6 className = "col-4 text-start">copyright &copy;2023 - Designed by Michael Zinzun</h6>
          <div className = "col-4 text-end">
            <i className = "fab fa-linkedin fa-2x mx-1"></i>
            <i className = "fa-brands fa-github fa-2x mx-1"></i>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
