import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../assets/css/App.css";

const slideImages = [
  {
    url: 'https://i.ibb.co/BsFbNgp/slide-4.jpg'
    
   
  },
  {
    url: 'https://i.ibb.co/TB1jwkz/vacationreview-145758.jpg'
   
  },
  {
    url: 'https://i.ibb.co/SmTCJY0/slide-2.jpg'
   
  },
];



const Slider = () => {
  return (

              <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`,'height':'500px','background-repeat':'no-repeat'}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
   

  )
}

export default Slider
