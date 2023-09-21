import React from 'react'
import "./checkIn.css"

export default function checkIn() {
  return (
    <div>

      <div className="container_1">
        <h1>WELCOME TO KINGS VILLA</h1>
        <p className='description'>Welcome to Kings Villa Galle your idyllic retreat in the heart of historic Galle. 
          Our charming villa offers affordable prices without compromising on luxury. 
          Embrace serenity in our lush garden, perfect for unwinding after exploring Galle's treasures. 
          Immerse yourself in the city's rich history and culture, all just steps away. 
          At Kings Villa, we make your comfort and budget our top priorities. Discover the perfect blend of relaxation,
          affordability, and convenience during your stay in Galle.
        </p>
      </div>

      <div className="container_2">
        <input type="submit" name='check_in' value={'Check - in  date'} className='btn1' />
        <input type="submit" name='check_out' value={'Check - out  date'} className='btn2' />
        <input type="submit" name='check_in' value={'2 Adults : 1 Child'} className='btn3' />
        <button type="submit" name="check_in" className="btn4" style={{ color: '#ffff00' }}>
          Check availability
          <br />
          Best price guarantied
        </button>
      </div>

      <div className="container_3">

        <div className="box_1">
          <img src="imgs/7.png" alt="Image 7" />
          <h3>Quick & easy bookings</h3>
        </div>

        <div className="box_2">
          <img src="imgs/8.png" alt="Image 8" />
          <h3>Quick & easy bookings</h3>
        </div>

        <div className="box_3">
          <img src="imgs/9.png" alt="Image 9" />
          <h3>Quick & easy bookings</h3>
        </div>

        <div className="box_4">
          <img src="imgs/10.png" alt="Image 10" />
          <h3>Quick & easy bookings</h3>
        </div>
      
      </div>

    </div>
  )
}
