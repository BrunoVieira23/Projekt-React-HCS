import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <header>
      <div className="header-container">
        <div className="navbar-links">
          <a href="#" className="navbar-link">
            Home
          </a>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link">
            Location
          </a>
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link">
            About
          </a>
        </div>
      </div>
    </header>
  );
}

export default App;
