import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./LocationComponent.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicHVzaGt5IiwiYSI6ImNsaXJjZzdtMjB0YzIzZW54bGdxdzh0a3kifQ.mUiM41Sn-m3rLnvKF7xusw";

const MapComponent = ({ location }) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initializeMap = () => {
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [0, 0],
        zoom: 1,
      });

      newMap.on("load", () => {
        newMap.resize();
      });

      setMap(newMap);
    };

    if (!map) {
      initializeMap();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  useEffect(() => {
    if (map && location) {
      map.flyTo({ center: [0, 0], zoom: 1 });
    }
  }, [map, location]);

  return <div ref={mapContainerRef} className="map-container" />;
};

const LocationComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <h1>Locations</h1>
      <div className="image-row">
        <div className="image-column">
          <img src="./src/assets/Porto.jpg" alt="Porto" className="thumbnail" />
          <p onClick={() => handleLocationClick("Porto, Portugal")}>
            Porto, Portugal
          </p>
        </div>
        <div className="image-column">
          <img
            src="./src/assets/PraiaCV.jpg"
            alt="Praia"
            className="thumbnail"
          />
          <p onClick={() => handleLocationClick("Praia, Cabo Verde")}>
            Praia, Cabo Verde
          </p>
        </div>
        <div className="image-column">
          <img
            src="./src/assets/RiodeJaneiro.jpg"
            alt="Rio de Janeiro"
            className="thumbnail"
          />
          <p onClick={() => handleLocationClick("Rio de Janeiro, Brasil")}>
            Rio de Janeiro, Brasil
          </p>
        </div>
      </div>
      <div className="image-row">
        <div className="image-column">
          <img src="./src/assets/Tokyo.jpg" alt="Tokyo" className="thumbnail" />
          <p onClick={() => handleLocationClick("Tokyo, Japan")}>
            Tokyo, Japan
          </p>
        </div>
        <div className="image-column">
          <img
            src="./src/assets/Tucson.jpg"
            alt="Tucson"
            className="thumbnail"
          />
          <p onClick={() => handleLocationClick("Tucson, USA")}>Tucson, USA</p>
        </div>
        <div className="image-column">
          <img
            src="./src/assets/Hamburg.jpg"
            alt="Hamburg"
            className="thumbnail"
          />
          <p onClick={() => handleLocationClick("Hamburg, Germany")}>
            Hamburg, Germany
          </p>
        </div>
      </div>
      {selectedLocation && <MapComponent location={selectedLocation} />}
    </div>
  );
};

export default LocationComponent;
