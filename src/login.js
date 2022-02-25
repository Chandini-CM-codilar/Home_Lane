import React, { Component } from 'react';
import Logo2 from '../src/IMAGES/logo.png';
import '../src/login.css';
class login extends Component {
    state = {
        email: '',
        pwd: ''
    }
    handleChange = (e) => {
        const { name, value } = e.taget
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {

    }
    render() {
        return (
            <div className='FormContainer'>
                

                    <div className='Login_text'>
                        <h1>Got questions?<br />
                            We’re happy to help out.</h1>
                    </div>
                    <div className='login_form'>
                        <form onSubmit>
                            <div><input type='name' name='Name' placeholder='Enter your name' required onchange={this.handleChange} /></div>
                            <div>  <input type='email' name='Email' placeholder='Enter your Email' required onchange={this.handleChange} /></div>
                            <div>   <input type='number' name='number' placeholder='Enter your mobile number' required onchange={this.handleChange} /></div>
                            <div> <input type='checkbox' id='homelane' name='homelane' value='login' required onchange={this.handleChange} />

                                <label for='homelane'> You can reach me on Whatsapp</label><br></br></div>
                            <div>
                                <input type='pincode' name='pincode' placeholder='Enter your residance pincode' required onchange={this.handleChange} /></div>
                            <button className='button' onsubmit> SUBMIT</button>
                        </form>
                    </div>
               
            </div>
        );
    }
}

export default login;