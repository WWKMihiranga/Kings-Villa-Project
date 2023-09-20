import React from "react";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import First_Page from "./components/First_Page/First_Page";
import TestimonialCarousel from './components/Reviews/TestimonialCarousel.js';
import RoomCategories from "./components/RoomCategories/Roomcategories";

function App() {
  return (
    <>
      <First_Page />
      
      <Map />
      <RoomCategories/>
      <TestimonialCarousel />
      <Footer />
      
    </>
  )
}
export default App;
