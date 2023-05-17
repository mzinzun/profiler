import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from "../components/Header";
import Home from "../components/Home";
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <nav>
          <ul className='menu navbar justify-content-space-evenly;'>
            <Link to='/profiler/home'><li>Home</li></Link>
            <Link to='/profiler/bio'><li>Bio</li></Link>
            <Link to='/profiler/resume'><li>Resume</li></Link>
            <Link to='/profiler/contact'><li>Contact</li></Link>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/profiler/" element={<Home />} />
            <Route path="/profiler/home" element={<Home />} />
            <Route path="/profiler/bio" element={<Header />} />
            <Route path="/profiler/contact" element={<Header />} />
            <Route path="/profiler/*" element={<Home />} />
          </Routes>
        </main>
        <footer className = "row m-0 p-0 px-2 justify-content-between align-items-center">
          <h6 className = "col-4 text-start">copyright &amp;2023 - Designed by Michael Zinzun</h6>
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
