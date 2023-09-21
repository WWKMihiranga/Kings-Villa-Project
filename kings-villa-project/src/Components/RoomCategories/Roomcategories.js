import React from "react";
import "./RoomCategories.css"; // Make sure to import your CSS file
import duplex_suite from "./suite.jpeg";
import double_room from "./double.png";
import triple_room from "./triple.jpeg";
import entire_villa from "./villa.jpeg";

function RoomCategories() {
  return (
    <>
      <div className="main_section">
        <h1 className="title">ROOM & SUITES</h1>

        <div className="product-list">
          <div className="product-box">
            <img
              src={double_room}
              alt="deluxe-double-room"
              className="product-img"
            />
            <div className="product-desbox">
              <h2 className="product-title">DELUXE DOUBLE ROOM</h2>
              <div className="product-des">
                <p>
                  Max 2 Guests
                  <br />1 King bed
                </p>
                <p className="price">$10</p>
              </div>
            </div>
          </div>

          <div className="product-box">
            <img
              src={double_room}
              alt="deluxe-triple-room"
              className="product-img"
            />
            <div className="product-desbox">
              <h2 className="product-title">DELUXE TRIPLE ROOM</h2>
              <div className="product-des">
                <p>
                  Max 3 Guests
                  <br />1 King bed and 1 single bed
                </p>
                <p className="price">$10</p>
              </div>
            </div>
          </div>

          <div className="product-box">
            <img src={double_room} alt="duplex-suite" className="product-img" />
            <div className="product-desbox">
              <h2 className="product-title">DUPLEX SUITE</h2>
              <div className="product-des">
                <p>
                  Max 5 Guests
                  <br />2 King beds and 1 single bed
                </p>
                <p className="price">$10</p>
              </div>
            </div>
          </div>

          <div className="product-box">
            <img src={double_room} alt="entire-villa" className="product-img" />
            <div className="product-desbox">
              <h2 className="product-title">ENTIRE VILLA</h2>
              <div className="product-des">
                <p>
                  Max 10 Guests
                  <br />4 King beds and 2 single beds
                </p>
                <p className="price">$10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomCategories;
