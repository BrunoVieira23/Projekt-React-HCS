import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./LocationComponent.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicHVzaGt5IiwiYSI6ImNsaXJjZzdtMjB0YzIzZW54bGdxdzh0a3kifQ.mUiM41Sn-m3rLnvKF7xusw";

const cities = [
  { name: "Porto, Portugal", coordinates: [-8.611, 41.1496] },
  { name: "Praia, Cabo Verde", coordinates: [-23.5087, 14.9331] },
  { name: "Rio de Janeiro, Brasil", coordinates: [-43.1729, -22.9068] },
  { name: "Tokyo, Japan", coordinates: [139.6917, 35.6895] },
  { name: "Tucson, USA", coordinates: [-110.9747, 32.2226] },
  { name: "Hamburg, Germany", coordinates: [9.9937, 53.5511] },
];

const LocationComponent = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [marker, setMarker] = useState(null);

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
    if (map && selectedLocation) {
      const city = cities.find((city) => city.name === selectedLocation);
      if (city) {
        map.flyTo({ center: city.coordinates, zoom: 10 });

        if (marker) {
          marker.remove();
        }

        const newMarker = new mapboxgl.Marker({ color: "#FF0000" })
          .setLngLat(city.coordinates)
          .addTo(map);
        setMarker(newMarker);
      }
    }
  }, [map, selectedLocation]);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <h1>Locations</h1>
      <div className="image-row">
        {cities.map((city) => (
          <div className="image-column" key={city.name}>
            <img
              src={`./src/assets/${city.name}.jpg`}
              alt={city.name}
              className="thumbnail"
            />
            <p onClick={() => handleLocationClick(city.name)}>{city.name}</p>
          </div>
        ))}
      </div>
      <div ref={mapContainerRef} className="map-container" />
    </div>
  );
};

export default LocationComponent;
