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
            <Link to=/'profiler/resume'><li>Resume</li></Link>
            <Link to='/profiler/resume'><li>Contact</li></Link>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/profiler/" element={<Home />} />
            <Route path="/profiler/home" element={<Home />} />
            <Route path="/profiler/bio" element={<Header />} />
            <Route path="/proflier/*" element={<Home />} />
          </Routes>
        </main>
        <footer>footer</footer>
      </Router>
    </div>
  );
}

export default App;
