import React, { Component } from 'react';
import Grid1 from '../src/IMAGES/G1.jpeg';
import Grid2 from '../src/IMAGES/G2.jpeg';
import Grid6 from '../src/IMAGES/G6.jpeg';
import Grid5 from '../src/IMAGES/G5.jpeg';
import Grid8 from '../src/IMAGES/G8.jpeg';
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
 import './grid.css';
class grid extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
        return (
          <>
            <div className='grid_gallery'>
                <h1>Shop by Furniture Types</h1>
                </div>
                <div className='grid_images'>
                    <Slider {...settings}>
                       
   
                    <img src={Grid1} alt="furniture_image" />
                  <img src={Grid2} alt="furniture_image" />
                    <img src={Grid6} className='a' alt="furniture_image" />
                    <img src={Grid5} alt="furniture_image" />
                    <img src={Grid8} alt="furniture_image" />
                    <img src={Grid1} alt="furniture_image" />
                    <img src={Grid2} alt="furniture_image" />
                    <img src={Grid6} alt="furniture_image" />
                    <img src={Grid5} alt="furniture_image" />
                    <img src={Grid8} alt="furniture_image" />
                    </Slider>
                </div>
           </>
        );
    }
}

export default grid;