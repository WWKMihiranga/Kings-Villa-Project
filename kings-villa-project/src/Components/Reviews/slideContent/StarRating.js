import React from 'react';

function StarRating({ rating }) {
  const stars = [];
  const roundedRating = Math.floor(rating); // Whole star rating
  const hasHalfStar = rating - roundedRating >= 0.5; // Check for half-star

  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(<span key={i} className="star filled">★</span>);
    } else if (i === roundedRating && hasHalfStar) {
      stars.push(
        <span key={i} className="star half-filled">
          <span className="half-star">★</span>
        </span>
      );
    } else {
      stars.push(<span key={i} className="star empty">★</span>);
    }
  }

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;