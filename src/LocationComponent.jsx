import React from "react";
import "./LocationComponent.css"; // Import the CSS file for styling

const LocationComponent = () => {
  return (
    <div>
      <h1>Locations</h1>
      <div className="image-row">
        <div className="image-column">
          <img src="./src/assets/Porto.jpg" alt="Porto" className="thumbnail" />
          <p>Porto, Portugal</p>
        </div>
        <div className="image-column">
          <img
            src="./src/assets/PraiaCV.jpg"
            alt="Praia"
            className="thumbnail"
          />
          <p>Praia, Cabo Verde</p>
        </div>
        <div className="image-column">
          <img
            src="./src/assets/RiodeJaneiro.jpg"
            alt="Rio de Janeiro"
            className="thumbnail"
          />
          <p>Rio de Janeiro, Brasil</p>
        </div>
      </div>
      <div className="image-row">
        <div className="image-column">
          <img src="./src/assets/Tokyo.jpg" alt="Tokyo" className="thumbnail" />
          <p>Tokyo, Japan</p>
        </div>
        <div className="image-column">
          <img
            src="./src/assets/Tucson.jpg"
            alt="Tucson"
            className="thumbnail"
          />
          <p>Tucson, USA</p>
        </div>
        <div className="image-column">
          <img
            src="./src/assets/Hamburg.jpg"
            alt="Hamburg"
            className="thumbnail"
          />
          <p>Hamburg, Germany</p>
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;
