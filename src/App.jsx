import { useState } from "react";
import "./App.css";
import LocationComponent from "./LocationComponent";
import AboutComponent from "./AboutComponent";

function App() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="app-container">
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
              className={`navbar-link ${
                activeLink === "about" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
          </div>
        </div>
      </header>
      <div className="content-container">
        <div className="left-content">
          {activeLink === "location" && <LocationComponent />}
        </div>
        <div className="right-content">
          {activeLink === "about" && <AboutComponent />}
        </div>
      </div>
    </div>
  );
}

export default App;
