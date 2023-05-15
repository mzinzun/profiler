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
          <ul>
            <Link to='/home'><li>Home</li></Link>
            <Link to='/bio'><li>Bio</li></Link>
            <Link to='/resume'><li>Resume</li></Link>
          </ul>
        </nav>



        <main>
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/bio" element={<Header />} />
          </Routes>
        </main>
        <footer>footer</footer>
      </Router>
    </div>
  );
}

export default App;
