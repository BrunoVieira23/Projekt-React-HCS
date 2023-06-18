import React from "react";
import "./LocationComponent.css"; // Import the CSS file for styling

const LocationComponent = () => {
  return (
    <div>
      <h1>Locations</h1>
      <div className="image-row">
        <div className="image-column">
          <img src="placeholder1.jpg" alt="Placeholder 1" />
          <p>Text 1</p>
        </div>
        <div className="image-column">
          <img src="placeholder2.jpg" alt="Placeholder 2" />
          <p>Text 2</p>
        </div>
        <div className="image-column">
          <img src="placeholder3.jpg" alt="Placeholder 3" />
          <p>Text 3</p>
        </div>
      </div>
      <div className="image-row">
        <div className="image-column">
          <img src="placeholder4.jpg" alt="Placeholder 4" />
          <p>Text 4</p>
        </div>
        <div className="image-column">
          <img src="placeholder5.jpg" alt="Placeholder 5" />
          <p>Text 5</p>
        </div>
        <div className="image-column">
          <img src="placeholder6.jpg" alt="Placeholder 6" />
          <p>Text 6</p>
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;
