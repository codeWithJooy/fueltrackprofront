import React from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const history = useHistory();
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
                <label>Full Name</label>
                <input type="text" />
              </div>
              <div className="detailInput">
                <label>Email</label>
                <input type="text" />
              </div>
              <div className="detailInput">
                <label>Password</label>
                <input type="text" />
              </div>
              <div className="detailInput">
                <label>Confirm Password</label>
                <input type="text" />
              </div>
              <div className="detailButton">
                <button>Sign Up</button>
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
