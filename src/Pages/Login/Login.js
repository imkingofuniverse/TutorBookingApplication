import React, { useState } from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState("srisai");
  const [ra, setRa] = useState("ram");
  const [rpw, setRpw] = useState("ram@123");
  const [pwd, setPwd] = useState("srisai123");
  const [usr, setUsr] = useState("monika");
  const [us, setsr] = useState("monika dg");
  const [p, setP] = useState("monika123");
  const [pd, setPd] = useState("mon123");

  function login() {
    let isLogged = checkIfUserIsValid();
    if (isLogged) {
      console.log("m here");
      //navigate("/home");
      //navigate("/cabcomponent");
      //navigate("/viewcabs");
      navigate("/tutorfunctions");
    } else {
      navigate("/failure");
      console.log("something went wrong");
    }
  }

  function checkIfUserIsValid() {
    let requestBody = {
      username: username,
      password: password,
    };
    // axios.post('xsnnxksxx',requestBody).then((res) => {

    // })
    if (username === user||usr||us||ra && password === pwd||pd||p||rpw) return true;
    else return false;
  }
  return (
    <div className="login">
      <h1>Login as Tutor</h1>
      <form>
        <div>
          <label id="username">Username  </label><br/>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
        </div><br/>
        <div>
          <label id="password">Password  </label><br/>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
        </div><br/>
        <button onClick={login}>Login</button>
      </form>
      <p>
        {" "}
        Not an existing user??{" "}
        <Link to="/signup">
          <span>Signup</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;