import React from "react";
import { Link } from "react-router-dom";
import img from "../images/pricing.jpg"
import Back from "../common/Back";
import "./Register.css";

const Register = () => {
    return (
      <>
        <section className='contact mb'>
          <Back name='Sign Up' title='Happy To Serve you With Our Service.' cover={img} />
          <div className='container'>
            <form className='shadow 'action="" method="get">
              <h4>Register</h4> <br />
              
                <input type='text' placeholder='Name' required />
                <input type='text' placeholder='Email' required />
              
              <input type='text' placeholder='Phone No' />
              <input type='text' placeholder='Bank Name' required />
              <input type='text' placeholder='IFSC Code' required />
              <input type='text' placeholder='Account Number' required />
              <input type='text' placeholder='Username' required />
              <input type='text' placeholder='Password' required />
              
              <Link to="/login">Already Registered?</Link>
              <button>Submit</button>
            </form>
          </div>
        </section>
      </>
    )
  }
  
  export default Register;