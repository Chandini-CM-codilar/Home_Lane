import React, { Component } from 'react';
import Img1 from "../src/IMAGES/logo.png";
import Img2 from "../src/IMAGES/search.png";
import Img3 from "../src/IMAGES/location.jpg";
import Img4 from "../src/IMAGES/wishlist.png";
import './homelane.css';
class homelane extends Component {
    render() {
        return (

            <nav>
            <div className="Header">
               
                <div className='logo'>
                <img src={Img1} alt="logo" width={180} />
                </div>
                <div className='Nav_list'>
                <ul type="none">
                    <li>Furniture</li>
                    <li>Appliances</li>
                    <li>Decor</li>
                </ul>
                </div>
                <div className='search_button'>
                    <img src={Img2} alt="search" width={25} height={25}/>
                    <input type="text" placeholder='What are you something for?'/>
                </div>
                <div className='main_class'>
                <div className='location'>
               <span className='location_a'>
                   <img src={Img3}alt="location"height={31}/><a href="">Banglore</a>
               </span>
                </div>
                <div className='wishlist'>
               <span className='wishlist_a'>
                   <img src={Img4}alt="wishlist"height={31}/><a href="">wishlist</a>
               </span>
               
                </div>
                <div className='login'>
                <span className='login'>Login</span>
                </div>
                </div>
                </div>
             

            
            </nav>
           
        );
    }
}

export default homelane;