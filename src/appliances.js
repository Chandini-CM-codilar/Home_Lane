import React, { Component } from 'react';
import Appliances1 from '../src/IMAGES/A1.jpg';
import Appliances2 from '../src/IMAGES/A2.jpeg';
import Appliances3 from '../src/IMAGES/A3.jpeg';
import Appliances4 from '../src/IMAGES/A4.jpg';
import Decor1 from '../src/IMAGES/D1.jpeg';
import Decor2 from '../src/IMAGES/D2.jpg';
import Decor3 from '../src/IMAGES/D3.jpg';
import '../src/appliances.css';
class appliances extends Component {
    render() {
        return (
            <>
            <div className='Grid_header'>
                <h1>Shop for Appliances</h1>
                </div>
            <div className='Grid_appliances'>
                <div> <img src={Appliances1} alt="Appliances_image" /></div>
                 <div> <img src={Appliances2} alt="Appliances_image" /></div>
                  <div><img src={Appliances3} className='a' alt="Appliances_image" /></div>
                  <div><img src={Appliances4} alt="Appliances_image" /> </div>
            </div>
            <div className='Decor'>
                <h2>Show for Decor</h2>
            </div>
            <div className='grid_decor'>
            <div> <img src={Decor1} alt="Decor_image" /></div>
                 <div> <img src={Decor2} alt="Decor_image" /></div>
                  <div><img src={Decor3} className='a' alt="Decor_image" /></div>
            </div>
            </>
        );
    }
}

export default appliances;