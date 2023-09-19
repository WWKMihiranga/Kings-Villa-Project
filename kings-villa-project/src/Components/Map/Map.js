import React from "react";
import { GoogleMap, GoogleApiWrapper, Marker } from "@react-google-maps/api";
import Iframe from "react-iframe";
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

          {/* <div className="item_set">
            <h3>Nearest Beaches</h3>
            <ul>
              <li>Mahamodara Beach - 1.1km</li>
              <li>Galle Fort Beach - 2.6km</li>
              <li>Dadalla Beach - 2.3km</li>
              <li>Unawatuna Beach - 4km</li>
            </ul>
          </div> */}

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

        <div className="col img_div">
          {/* <img src={MapImage} alt="Map of Galle Subaurb" /> */}
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d816.3635848030631!2d80.20967182328074!3d6.047619288536783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173e9c636b5f5%3A0xe1157d7a971600f0!2sKINGS%20VILLA!5e0!3m2!1sen!2ssg!4v1694950429073!5m2!1sen!2ssg"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
        
      </div>
    </>
  );
}

export default TextDisplay;
