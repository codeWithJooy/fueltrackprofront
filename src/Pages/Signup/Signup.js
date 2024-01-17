import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { userSignup } from "../../actions/userActions";

import "./Signup.css";

const Signup = () => {
  const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  });
  const history = useHistory();
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSignup=()=>{
    (async()=>{
       if(await userSignup(user))(
         history.push("/pumpsetup")
       )
    })()
  }
  const handleLogin = () => {
    history.push("/login")
  };
  return (
    <div className="signMain">
      <div className="signContainer">
        <div className="signCard">
          <div className="signImage">
            <img src="Assets/Signup/petrolpump.jpg" />
          </div>
          <div className="signDetails">
            <div className="signDetailsContainer">
              <div className="detailTitle">
                <p>Welcome To FuelTrack Pro</p>
              </div>
              <div className="detailHeader">
                <p>Sign Up</p>
              </div>
              <div className="detailInput">
                <label>First Name</label>
                <input type="text" 
                 name="firstName"
                 placeholder="First Name"
                 value={user.firstName}
                 onChange={handleChange}
                />
              </div>
              <div className="detailInput">
                <label>Last Name</label>
                <input 
                 type="text" 
                 name="lastName"
                 placeholder="Last Name"
                 value={user.lastName}
                 onChange={handleChange}
                />
              </div>
              <div className="detailInput">
                <label>EMail</label>
                <input 
                  type="text" 
                  name="email"
                  value={user.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="detailInput">
                <label>Password</label>
                <input 
                 type="password" 
                 name="password"
                 value={user.password}
                 placeholder="Password"
                 onChange={handleChange}
                />
              </div>
              <div className="detailButton">
                <button onClick={handleSignup}>Sign Up</button>
                <div className="already">
                  <p>
                    Already Have an Account ?<span onClick={handleLogin}>Log In</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
