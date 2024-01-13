import React from "react";
import "./Signup.css";

const Login = () => {
  return (
    <div className="signMain">
      <div className="signContainer">
        <div className="signCard">
          <div className="signImage">
            <img src="Assets/Signup/petrolpump.jpg" />
          </div>
          <div className="signDetails">
            <div className="signDetailsContainer">
              <div className="detailHeader">
                <p>Login</p>
              </div>
              <div className="detailInput">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="detailInput">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="detailInput">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="detailInput">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="detailHeader"></div>    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
