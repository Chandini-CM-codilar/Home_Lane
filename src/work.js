import React, { Component } from 'react';
import '../src/work.css';
class work extends Component {
    render() {
        return (
            <>
            <div className='Work_header'>
                <h4>How it Works</h4>
            </div>
            <div className='work_container'>
            <div className='Img_work'>
            <img class="lazyload loaded" src="https://homelane-dev.codilar.in/static/version1645678339/frontend/Codilar/homelane/en_GB/images/work-1.svg"/>
            <div className='Img_text'>
                <h1>1. Wishlist</h1>
                <p>Explore ready-to-ship furniture designs
<br/>from our extensive catalogue</p>
            </div>
            </div>
            <div className='Img_arrow'>
            <img class="lazyload loaded" src="https://homelane-dev.codilar.in/static/version1645678339/frontend/Codilar/homelane/en_GB/images/arrow.svg" />
            
            </div>
            <div className='Img_work2'>
            <img class="lazyload loaded" src="https://homelane-dev.codilar.in/static/version1645678339/frontend/Codilar/homelane/en_GB/images/work-2.svg" />
            <div className='Img_text2'>
            <h2>2. Sign off</h2>
<p>Sign-off on the updated price quote with
<br/>chosen interiors and add-on furniture.</p>
            </div>

            </div>
            <div className='Img_arrow2'>
            <img class="lazyload loaded" src="https://homelane-dev.codilar.in/static/version1645678339/frontend/Codilar/homelane/en_GB/images/arrow.svg" />
            </div>
            <div className='Img_work3'>
            <img class="lazyload loaded" src="https://homelane-dev.codilar.in/static/version1645678339/frontend/Codilar/homelane/en_GB/images/work-3.svg" />
            <div className='Img_text3'>
           <h3> 3. Move in</h3>
<p>Receive delivery along with your interiors and
<br/>move-in instantly to a fully liveable home.</p>
            </div>
            </div>
            
            </div>
            </>
        );
    }
}

export default work;