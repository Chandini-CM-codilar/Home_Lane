import React, { Component } from 'react';
import Img1 from "../src/IMAGES/logo.png";
import Img4 from "../src/IMAGES/wishlist.png";
import '../src/Newarrivals.css';

class Newarrivals extends Component {
    render() {
        return (
          <>
                 <div className='main_arrivals'>
                    <div className='Arrival_header'>
                        <h3>New Arrivals</h3>
                    </div>
                    <div className='Arrival_logo'>
                        <div className='one'>
                        <div className='Arrival_logo1'>
                        <img src={Img1} alt="logo" width={300} />
                      </div>
                            <div className='Arrival_rate1 two'>
                                <div className="Description">FabIndia Bunai Natural Queen Bed</div>
                                <div className="Rate">84,990</div>
                                <div className='three'> <span className='wishlist_a'>
                   <img src={Img4}alt="wishlist"height={31}/><a href="">wishlist</a>
               </span></div>
                           
               </div>
               </div>
                         
<div className='one'>
                        <div className='Arrival_logo2'>
                      
                             <img src={Img1} alt="logo" width={300} /></div>
                             <div className='Arrival_rate2 two'>
                                <div className='Description2'>FabIndia Chevron Smoke Grey Queen Bed</div>
                                <div className='rate2'>84,900</div>
                                <div className='three'> <span className='wishlist_a'>
                   <img src={Img4}alt="wishlist"height={31}/><a href="">wishlist</a>
               </span></div>
                           
                       </div> 
                       </div> 

                       <div className='one'>

                        <div className='Arrival_logo3'>
                        
                             <img src={Img1} alt="logo" width={300} /></div>
                             <div className='Arrival_rate3 two'>
                                <div className='Description3'>FabIndia Cara Smoke Grey Double Bed</div>
                                <div className='rate3'>59,990</div>
                                <div className='three'> <span className='wishlist_a'>
                   <img src={Img4}alt="wishlist"height={31}/><a href="">wishlist</a>
               </span></div>
              </div>
              </div>
                      <div className='one'>
                        <div className='Arrival_logo4'>
                        
                                <img src={Img1} alt="logo" width={300} /></div>
                                <div className='Arrival_rate4 two'>
                                <div className="Description4">FabIndia Chevron Smoke Grey Double Bed</div>
                                <div className="rate4">74,990</div>
                                <div className='three'> <span className='wishlist_a'>
                   <img src={Img4}alt="wishlist"height={31}/><a href="">wishlist</a>
               </span></div>
              
                    </div>
                   
                    </div>
             </div>
             </div>
         </>
        );
    }
}

export default Newarrivals;