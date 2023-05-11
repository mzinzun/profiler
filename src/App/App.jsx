import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header >
        <h1>My Profile</h1>
      </header>
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>My Content goes Here</h2>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
