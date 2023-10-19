import logo from "./logo.png";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyWord="sunset"/>
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Maria Botiș and is{" "}
            <a
              href="https://github.com/maria-miruna/dictionary-project"
              target="blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://gorgeous-beignet-f13f8b.netlify.app/"
              target="blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
