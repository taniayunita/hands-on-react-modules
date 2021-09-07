import React from "react";
import Logo from "../../assets/Logo_dekstop.png";
import "./Login_register.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function RegisterPages() {
  const userContext = React.useContext(UserContext);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onRegister = () => {
    // console.log(">>", username, password);
    if (
      username.length > 0 &&
      password.length > 4
    ) {
        if(password !== confirmPassword){
            alert('password did not match');
            return;
        }
    //   console.log(">>", "register");
        userContext.register(username, password);
    }
  };

  return (
    <div className="LoginPage-container">
      <div className="box">
        <img src={Logo} alt="Logo_BRI_Dekstop" />
        <div className="input-field">
          <i><FontAwesomeIcon icon="user"/></i>
          <input
            type="email"
            placeholder="Username(email)"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input-field">
          <i><FontAwesomeIcon icon="lock"/></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-field">
          <i><FontAwesomeIcon icon="lock"/></i>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button className="btn" onClick={onRegister}>
          Register
        </button>
        <p className="akun">
          Sudah mempunyai akun ?{" "}
          <span>
            <Link className="link" to="/">
              login
            </Link>
            {/* <button className="link">Login</button> */}
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPages;
