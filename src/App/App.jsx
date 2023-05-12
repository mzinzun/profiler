import Header from "../components/Header";
import Home from "../components/Home"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
