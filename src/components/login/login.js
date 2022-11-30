import React from "react";

import img from "../images/pricing.jpg"
import Back from "../common/Back";
import "./login.css";

const login = () => {
    return (
      <>
        <section className='contact mb'>
          <Back name='Sign In' title='Happy To Serve you With Our Service.' cover={img} />
          <div className='container'>
            <form className='shadow '>
              <h4>Sign In</h4> <br />
              <div>
                
              </div>
              
              <input type='text' placeholder='Username' required />
              <input type='text' placeholder='Password' required />
              
              
              <button>Submit</button>
            </form>
          </div>
        </section>
      </>
    )
  }
  
  export default login;