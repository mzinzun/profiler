import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "../components/Header";
import Home from "../components/Home";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import './App.css';
// logo images to display
const logos = ["bootstrap2.png", "express2.png", "react2.png", "github2.png", "lastmile2.png", "linkedin2.png", "zincom.png", "nextchapter2.png", "nodejs2.png", "react2.png", "bootstrap2.png", "express2.png", "github2.png", "lastmile2.png", "linkedin2.png", "zincom.png", "nextchapter2.png", "react2.png", "nodejs2.png", "zincom.png", "nextchapter2.png", "lastmile2.png"]
function App(props) {
    const [logosOpacity, setlogosOpacity] = useState(1);
    const [winWidth, setWinWidth] = useState(window.innerWidth);
    const [winHeight, setWinHeight] = useState(window.innerHeight);
    useEffect(() => {
        console.log('App Component is Loaded');
        // <Router basename={process.env.PUBLIC_URL}>
    }, []);
    return (
        <div className="App">
            <Router basename="/profiler">
                <Header />
                <nav >
                    <ul className='menu navbar justify-content-start'>
                        <Link to='/home'><li>Home</li></Link>
                        <Link to='/bio'><li>Bio</li></Link>
                        <Link to='/resume'><li>Resume</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={<Home setlogosOpacity={setlogosOpacity} logosOpacity={logosOpacity} />} />
                        <Route path="/home" element={<Home setlogosOpacity={setlogosOpacity} logosOpacity={logosOpacity} />} />
                        <Route path="/bio" element={<Bio logosOpacity = {logosOpacity} setlogosOpacity = {setlogosOpacity} />} />
                        <Route path="/resume" element={<Resume setlogosOpacity={setlogosOpacity} logosOpacity={logosOpacity} />} />
                        <Route path="/contact" element={<Contact setlogosOpacity={setlogosOpacity} logosOpacity={logosOpacity} />} />
                        <Route path="/*" element={<Home />} />
                    </Routes>
                    <div className='fillerDiv'>
                        {logos.map((el, idx) => {
                            let lefty = Math.floor(Math.random() * winWidth);
                            let timer = (Math.random() * 3) + 4
                            let delayer = (Math.random() * 3) + 1;
                            // console.log(delayer)
                            return (
                                <img key={idx} className='img1' src={require(`./images/logos/${logos[idx]}`)} alt='bootstrap' style={{
                                    left: lefty,
                                    opacity: logosOpacity,
                                    animation: `${timer}s ease-in ${delayer}s infinite img${idx}Floater`
                                }} />
                            )
                        })}
                    </div>
                </main>
                <footer className="row m-0 p-0 px-2 justify-content-between align-items-center">
                    <h6 className="footerText col-8">copyright &copy;2023 - Designed by Michael Zinzun</h6>
                    <div className="col-4 text-end">
                        <Link to="https://linkedin.com/in/michaelzinzun" target="_blank"><i className="fab fa-linkedin fa-2x mx-1"></i></Link>
                        <Link to="https://github.com/mzinzun" target="_blank"><i className="fa-brands fa-github fa-2x mx-1"></i></Link>

                    </div>
                </footer>
            </Router>
        </div>
    );
}

export default App;
