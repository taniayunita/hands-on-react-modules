import React from "react";
import Logo from "../../assets/Logo_dekstop.png";
import "./Login_register.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function LoginPages() {
  const userContext = React.useContext(UserContext);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLogin = () => {
    if (username.length > 0 && password.length > 4) {
    //   console.log(">>", username, password);
        userContext.login(username,password);
    }
  };

  return (
    <div className="LoginPage-container">
      <div className="box">
        <img src={Logo} alt="Logo_BRI_Dekstop" />
        <div className="input-field">
          <i><FontAwesomeIcon icon="user"/></i>
          <input
            type="text"
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
        <button className="btn" onClick={onLogin}>
          login
        </button>
        <p className="akun">
          Belum mempunyai akun ?{" "}
          <span>
            <Link className="link" to="/register">
              register
            </Link>
            {/* <button className="link" component={Link} to="/register">Register</button> */}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPages;
