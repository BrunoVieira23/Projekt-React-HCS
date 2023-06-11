import { useState } from "react";
import "./App.css";
import LocationComponent from "./Location";
import AboutComponent from "./About";

function App() {
  const [count, setCount] = useState(0);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <div className="header-container">
        <div className="navbar-links">
          <a
            href="#"
            className={`navbar-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
        </div>
        <div className="navbar-links">
          <a
            href="#"
            className={`navbar-link ${
              activeLink === "location" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("location")}
          >
            Location
          </a>
        </div>
        <div className="navbar-links">
          <a
            href="#"
            className={`navbar-link ${activeLink === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
        </div>
      </div>
      {activeLink === "location" && <LocationComponent />}
      {activeLink === "about" && <AboutComponent />}
    </header>
  );
}

export default App;
