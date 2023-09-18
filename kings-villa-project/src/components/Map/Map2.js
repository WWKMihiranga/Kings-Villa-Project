import React, { useState } from 'react';
import Iframe from 'react-iframe';
import "./map.css";

const GoogleMaps = () => {
  const [src, setSrc] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.6142766654957!2d80.20669287516336!3d6.0475396285109415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173e9c636b5f5%3A0xe1157d7a971600f0!2sKINGS%20VILLA!5e0!3m2!1sen!2slk!4v1695024534382!5m2!1sen!2slk'
  );

  const mahamodara_beach = () => {
    setSrc(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.6650716764098!2d80.19411377516336!3d6.0406119285860855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173e214c75e6f%3A0xdd24da8edb6a9607!2sMahamodara%20Beach!5e0!3m2!1sen!2slk!4v1695025778495!5m2!1sen!2slk'
    );
  };

  const gallefort_beach = () => {
    setSrc(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7779509326033!2d80.21707947516325!3d6.025188428753109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a66ba43039%3A0x514b0873a0440df9!2sGalle%20Fort%20Beach!5e0!3m2!1sen!2slk!4v1695033860912!5m2!1sen!2slk'
    );
  };

  const dasalla_beach = () => {
    setSrc(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63481.53644225694!2d80.10660434863283!3d6.0500265999999945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1752e778e5651%3A0xdb233424fe72171e!2sDadalla%20beach!5e0!3m2!1sen!2slk!4v1695033777414!5m2!1sen!2slk'
    );
  };

  const unawatuna_beach = () => {
    setSrc(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.9027080555074!2d80.24521882516318!3d6.008096078937728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae172eebc19a0dd%3A0x1bcfa16fa4ddf516!2sUnawatuna%20Beach!5e0!3m2!1sen!2slk!4v1695033638317!5m2!1sen!2slk'
    );
  };

  const galle_fort = () => {
    setSrc(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7630037440235!2d80.21412532516332!3d6.027233028730988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a4115316af%3A0x6e9078b6e3e0a7f!2sGalle%20Dutch%20Fort%2C%20Galle%2080000!5e0!3m2!1sen!2slk!4v1695034822363!5m2!1sen!2sl'
    );
  };

  const fort_museum = () => {
    setSrc(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7565983498243!2d80.21623701744385!3d6.028109000000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a5cd0fe0e7%3A0x77a965e07f789585!2sMaritime%20Museum!5e0!3m2!1sen!2slk!4v1695034902742!5m2!1sen!2sl'
    );
  };

  const dharmapala_park = () => {
    setSrc(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.724829748489!2d80.21364259999999!3d6.032451650000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a333575b33%3A0xb9056fdfc7e204ee!2sDharmapala%20Park%2C%20Colombo%20Rd%2C%20Galle%2080000!5e0!3m2!1sen!2slk!4v1695035025414!5m2!1sen!2sl'
    );
  };

  const galle_fort_clock_tower = () => {
    setSrc(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.742556888057!2d80.21511174999996!3d6.030028800000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173a37f236aa5%3A0x5af4b1fd448e700e!2sGalle%20Fort%20Clock%20Tower!5e0!3m2!1sen!2slk!4v1695035054402!5m2!1sen!2slk'
    );
  };

  const magister_square = () => {
    setSrc(
      '#'
    );
  };

  const galle_railway_station = () => {
    setSrc(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7180749824706!2d80.21435069999998!3d6.033374600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1734fa76a1237%3A0xf8e46cec3163e33b!2sGalle%20railway%20station!5e0!3m2!1sen!2slk!4v1695035208712!5m2!1sen!2slk'
    );
  };

  const galle_bus_station = () => {
    setSrc(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.72152000885!2d80.21575739999999!3d6.0329039000000035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bcaebbf171%3A0xc64b248b21dda869!2sGalle%20Bus%20Stand!5e0!3m2!1sen!2slk!4v1695035230857!5m2!1sen!2slk'
    );
  };


  return (
    <div>
      <div className="map_section_header">
        <h1>Distance Tracker</h1>
      </div>

      <div className="container">
        <div className="col list_item">
          <div className="item_set">
            <h3>Nearest Beaches</h3>
            <ul>
              <li><a onClick={mahamodara_beach}>Mahamodara Beach - 1.1km</a></li>
              <li><a onClick={gallefort_beach}>Galle Fort Beach - 2.6km</a></li>
              <li><a onClick={dasalla_beach}>Dadalla Beach - 2.3km</a></li>
              <li><a onClick={unawatuna_beach}>Unawatuna Beach - 4km</a></li>
            </ul>
          </div>
          <div className="item_set">
            <h3>Nearest Attraction Places</h3>
            <ul>
              <li><a onClick={galle_fort}>Galle fort-2.2km</a></li>
              <li><a onClick={fort_museum}>Fort museum-2.2km</a></li>
              <li><a onClick={dharmapala_park}>Dharmapala park-1.6km</a></li>
              <li><a onClick={galle_fort_clock_tower}>Galle Fort Clock Tower-2km</a></li>
              <li><a onClick={magister_square}>Magister Square-2.3 km</a></li>
            </ul>
          </div>
          <div className="item_set">
            <h3>Public Transpotation Places</h3>
            <ul>
              <li><a onClick={galle_railway_station}>Galle railway station-1.6km</a></li>
              <li><a onClick={galle_bus_station}>Galle bus station-1.7km</a></li>
            </ul>
          </div>
        </div>
        <div className="col img_div">
          {/* <img src={MapImage} alt="Map of Galle Subaurb" /> */}
          <Iframe
            src={src}
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;
