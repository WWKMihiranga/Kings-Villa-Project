import React from "react";
import Map2 from "./components/Map/Map2";
import Footer from "./components/Footer/Footer";
import First_Page from "./components/First_Page/First_Page";
import TestimonialCarousel from './components/Reviews/TestimonialCarousel.js';
import RoomCategories from "./components/RoomCategories/Roomcategories";
import CheckIn from "./components/Check-in_Check-out/checkIn";



function App() {
  return (
    <>
      <First_Page /> 
      <CheckIn />    
      {/* <Map /> */}
      <Map2/>
      <TestimonialCarousel />
      <RoomCategories />
      <Footer />
      
      
    </>
  )
}
export default App;
