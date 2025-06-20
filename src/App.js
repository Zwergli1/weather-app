import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <SearchEngine />
        <footer>
          This project was coded by LL and is open-sourced on{" "}
          <a href="https://github.com/Zwergli1/weather-app">Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
