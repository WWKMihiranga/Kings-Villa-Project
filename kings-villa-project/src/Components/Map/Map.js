import React from "react";
import MapImage from "./map_image.png";
import "./map.css";

function TextDisplay() {
  return (
    <>
      <div className="map_section_header">
        <h1>Distance Tracker</h1>
      </div>

      <div className="container">
        <div className="col list_item">
          <div className="item_set">
            <h3>Nearest Beaches</h3>
            <ul>
              <li>Mahamodara Beach - 1.1km</li>
              <li>Galle Fort Beach - 2.6km</li>
              <li>Dadalla Beach - 2.3km</li>
              <li>Unawatuna Beach - 4km</li>
            </ul>
          </div>
          <div className="item_set">
            <h3>Nearest Attraction Places</h3>
            <ul>
              <li>Galle fort-2.2km</li>
              <li>Fort museum-2.2km</li>
              <li>Dharmapala park-1.6km</li>
              <li>Galle Fort Clock Tower-2km</li>
              <li>Magister Square-2.3 km</li>
            </ul>
          </div>
          <div className="item_set">
            <h3>Public Transpotation Places</h3>
            <ul>
              <li>Galle railway station-1.6km</li>
              <li>Galle bus station-1.7km</li>
            </ul>
          </div>
        </div>
        <div className="img_div col">
          <img src={MapImage} alt="Map of Galle Subaurb" />
        </div>
      </div>
    </>
  );
}

export default TextDisplay;
