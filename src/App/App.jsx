import logo from './logo.svg';
import Header from "../components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>My Content goes Here</h2>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
