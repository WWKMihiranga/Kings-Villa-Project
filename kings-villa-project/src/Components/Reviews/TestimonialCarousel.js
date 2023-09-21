import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Slide from './slideContent/Slide'; // Import Slide component
import image2 from './images/trial2.jpg';
import image1 from './images/trial1.jpg';

const testimonialsData = [
  {
    profilePic: image1, 
    name: 'Leia',
    review: `The house was lovely and the people who rent the space are even lovelier. Kashuei answered all of our questions to make us extremely comfortable in our stay. She directed us to the perfect dinner for that night and made us a delicious breakfast the next morning. Our room was spacious and the shower was wonderful. She helped us arrange for a driver to get to us to Ella during a petrol shortage and took great care of us, seeing us all the way through to our destination. I would recommend to anyone to stay here.`,
    rating: 5,
  },
  {
    profilePic: image2, 
    name: 'Angel',
    review: `The villa was a spacious and a quiet place. I went there with my friends and we had an amazing stay. The owner of the villa was generous enough to let us check in earlier and use their cutlery whenever needed. The rooms were very clean and we were offered help whenever needed. Highly recommend this place since it is close to the galle fort and amazing hospitality`,
    rating: 4,
  },
  {
    profilePic: './images/Niketh.jpg', 
    name: 'Sarah',
    review: `I had an amazing experience during my stay. The room was luxurious, the service was impeccable, and the breakfast was delicious. I would definitely stay here again.`,
    rating: 3,
  },
  {
    profilePic: './images/Niketh.jpg', 
    name: 'Lucy',
    review: `I had an amazing experience during my stay. The room was luxurious, the service was impeccable, and the breakfast was delicious. I would definitely stay here again.`,
    rating: 3.5,
  },
  {
    profilePic: './images/Niketh.jpg', 
    name: 'Nethmi',
    review: `I had an amazing experience during my stay. The room was luxurious, the service was impeccable, and the breakfast was delicious. I would definitely stay here again.`,
    rating: 3,
  },
];

function TestimonialCarousel() {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000} // Auto-play interval in milliseconds
    >
      {testimonialsData.map((testimonial, index) => (
        <Slide key={index} testimonial={testimonial} />
      ))}
    </Carousel>
  );
}

export default TestimonialCarousel;