import React, { Component } from 'react';
import Background1 from '../src/IMAGES/bg1.jpg';
import Background2 from '../src/IMAGES/bg2.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class Section extends Component {
    render() {
        return (
            <Carousel showThumbs={false}>
                <div>
                    <img src={Background1}/>
                   
                </div>
                <div>
                    <img src={Background2} />
                   
                </div>
               
            </Carousel>
        );
    }
}

export default Section ;