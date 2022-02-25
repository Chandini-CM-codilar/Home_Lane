import React, { Component } from 'react';
import visual1 from '../src/IMAGES/W1.png';
import visual2 from '../src/IMAGES/W2.png';
import visual3 from '../src/IMAGES/W3.png';
import visual4 from '../src/IMAGES/W4.png';
import '../src/visual.css';
class visual extends Component {
    render() {
        return (
        
            <div className='Visual_image'>
                <div className='V_image1'>
                    <img src={visual1} alt="visual_Img" />
                    <div className='V_text1'>
                        <h1>3-D Design Visualization</h1>
                        <p>Virtually create your dream home by digitally
                            mapping your ideas and products on the screen.</p>
                    </div>
                </div>
                <div className='V_image2'>
                    <img src={visual2} alt="visual_Img" />
                    <div className='V_text2'>
                        <h1>After-Sales Service</h1>
                        <p>Enjoy unwavering technical support and
                            after-sales maintenance services for 5 years.</p>
                    </div>
                </div>
                <div className='V_image3'>
                    <img src={visual3} alt="visual_Img" />
                    <div className='V_text3'>
                        <h1>1-Year Service Warranty</h1>
                        <p>All our products come with a reliable 1-year
                            warranty for any manufacturing defects.</p>
                    </div>
                </div>
                <div className='V_image4'>
                    <img src={visual4} alt="visual_Img" />
                    <div className='V_text4'>
                        <h1>Hassle-Free Execution</h1>
                        <p>Get your chosen products installed in 45 days,
                            or we pay you rent for your troubles. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default visual;