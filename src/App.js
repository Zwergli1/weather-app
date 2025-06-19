import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchEngine />
        <footer>
          Hosted on <a href="https://github.com/Zwergli1/weather-app">Github</a>
        </footer>
      </header>
    </div>
  );
}

export default App;
