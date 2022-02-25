import React, { Component } from 'react';
import Logo3 from '../src/IMAGES/logo.png';
import '../src/footer.css';
class footer extends Component {
    render() {
        return (
            <>
                <div className='footer'>
                    <div className='footer_logo'>
                        <img src={Logo3} alt="footer_logo" />
                    </div>
                    <br />
                    <div className='footer_text'>
                        <p>At Homelane, we bring both functionality and aesthetics together - to provide homeowners with a customizable and stunning design solution for their dream home. And this doesn’t just stop with interiors, but goes the whole nine yards of home decor and furnishing. We’ve carefully chosen, catalogued and put together this impressive range of verified furniture offerings - to help you create a personalised home that’s well-suited to your lifestyle. From sophisticated living room interior designs to space-saving furniture, we are here to help you find the best home interior designs, decor and furniture offerings to match your unique needs and style. All our products come with a minimum of 5-years warranty, along with unwavering after-sales support and maintenance.</p>
                    </div>

                </div>
                <div className='footer_store'>
                    <div>
                        <h2>Homelane Store</h2>
                        <ol>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ol>
                    </div>
                    <div className='footer_lane2'>
                        <h2>Furniture</h2>
                        <ol>
                            <li>Sofas</li>
                            <li>Cofee Tables</li>
                            <li>Bedside Tables</li>
                        </ol>
                    </div>
                    <div className='footer_lane3'>
                        <h3>Appliances</h3>
                        <ol>
                            <li>Oven</li>
                            <li>Chimeny</li>
                            <li>Dishwasher</li>
                        </ol>
                    </div>
                    <div className='footer_lane4'>
                        <h4>Registered Addresss</h4>
                        <ol>
                            <li>address Lines1,Lorem Ipsum Lorem Ipsum</li>
                            <li>address Lines2,Lorem Ipsum Lorem Ipsum</li>
                            <li>Bengaluru</li>
                            <li>Karnataka-442215</li>
                            <li>GST-</li>
                        </ol>
                    </div>

                </div>
            </>
        );
    }
}

export default footer;