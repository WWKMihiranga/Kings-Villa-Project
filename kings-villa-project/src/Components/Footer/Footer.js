import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div class="black-footer">
        <div class="footer-images">
          <div className="each_img">
            <img src="imgs/1.jpg" alt="Living room view" />
          </div>
          <div className="each_img">
            <img src="imgs/2.jpg" alt="A wooden table view" />
          </div>
          <div className="each_img">
            <img src="imgs/3.jpg" alt="IStaircase view" />
          </div>
          <div className="each_img">
            <img src="imgs/4.jpg" alt="View of inside a room" />
          </div>
          <div className="each_img">
            <img src="imgs/5.jpg" alt="The villa view" />
          </div>
          {/* <img src="imgs/1.jpg" alt="Image 1" />
                <img src="imgs/2.jpg" alt="Image 2" />
                <img src="imgs/3.jpg" alt="Image 3" />
                <img src="imgs/4.jpg" alt="Image 4" />
                <img src="imgs/5.jpg" alt="Image 5" /> */}
        </div>

        <div class="footer-details">
          <div class="footer-content">
            <div className="item box1">
              <h2>Kings Villa</h2>
              <p>
                Ideal Retreats for the Modern, <br />
                Fast-Paced Lifestyle on the Move.
              </p>
            </div>

            <div className="item box2">
              <h2>Useful Links</h2>
              <ul>
                <li>Gallery</li>
                <li>Rooms</li>
                <li>Our facilities</li>
                <li>Reviews</li>
              </ul>
            </div>

            <div className="item box3">
              <h2>Address</h2>
              <ul>
                <li>No:04, Sumedha Road, Galle</li>
              </ul>
              <br />

              <h2>Email</h2>
              <ul>
                <li>kingsvillagalle@gmail.com</li>
              </ul>
              <br />
            </div>

            <div className="item box4">
              <h2>Telephone</h2>
              <p>
                For reservations call - +94 77 14 55 841
                <br />
                Whatsapp - 077 14 55 841
              </p>
            </div>
          </div>
        </div>

        <div class="footer-social">
          <h1>
            <FaFacebookSquare />
          </h1>
          <h1>
            {" "}
            <FaInstagram color="#fff" />
          </h1>
          <h1>
            {" "}
            <FaYoutube color="#fff" />
          </h1>
        </div>

        <div class="footer-copyright">
          <p>&copy; 2023 Kings Villa. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
