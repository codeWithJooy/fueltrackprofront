import React from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";

const Login = () => {
  const history = useHistory();
  const handleSignup=()=>{
    history.push("/signup")
  }
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
                <p>Login</p>
              </div>
              <div className="detailInput">
                <label>Email</label>
                <input type="text" />
              </div>
              <div className="detailInput">
                <label>Password</label>
                <input type="text" />
              </div>
              <div className="detailButton">
                <button>Log In</button>
                <div className="already">
                  <p>
                    Already Have an Account ?<span onClick={handleSignup}>Sign Up</span>
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

export default Login;
