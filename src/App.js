import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sion" />
        <footer>
          This project was coded by LL and is open-sourced on{" "}
          <a href="https://github.com/Zwergli1/weather-app">Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
