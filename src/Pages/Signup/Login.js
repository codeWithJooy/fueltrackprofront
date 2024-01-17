import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import { userLogin } from "../../actions/userActions";

const Login = () => {
  const history = useHistory();
  const handleSignup = () => {
    history.push("/signup");
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    (async()=>{
      if(await userLogin(user)){
        history.push("/pumps")
      }
    })()
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
                <p>Login</p>
              </div>
              <div className="detailInput">
                <label>Email</label>
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
                <button onClick={handleLogin}>Log In</button>
                <div className="already">
                  <p>
                    Already Have an Account ?
                    <span onClick={handleSignup}>Sign Up</span>
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
