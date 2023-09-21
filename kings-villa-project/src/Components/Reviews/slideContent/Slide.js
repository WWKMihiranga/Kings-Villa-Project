import React from 'react';
import './Slide.css'; // Importing the CSS file
import StarRating from './StarRating';

function Slide({ testimonial }) {
  // Destructuring the testimonial object inside the component
  const { profilePic, name, review, rating } = testimonial;

  return (
    <div className="slide">
      <div className="testi">Testimony</div>
      <div className="happy">Our Happy Guests says</div>
      <div className='profile-pic-div'>
        <img className="profile-pic" src={profilePic} alt={name} />
        <div className='quotations'>&#8220;</div>
      </div>
      <div className="star-rating">
        <StarRating rating={rating} /> 
      </div>
      <div className="review">
        {review}
      </div>
      <div className="reviewer">
        {name}
      </div>
      <div className="reviewer-info">
        Stayed at Deluxe double room
      </div>
    </div>
  );
}

export default Slide;