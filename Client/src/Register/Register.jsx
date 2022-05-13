import axios from "axios";
import React, { useRef } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const email = useRef(); //to prevent rerendering we use useRef instead of usseState Hook
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  let navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const res = await axios.post("/auth/register", user);
        console.log(res);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">HelloSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Hellosocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={loginHandler}>
            <input
              placeholder="Username"
              type="text"
              required
              ref={username}
              className="inputLogin"
              minLength="6"
            />
            <input
              placeholder="Email"
              type="email"
              required
              ref={email}
              className="inputLogin"
            />
            <input
              placeholder="Password"
              type="password"
              required
              ref={password}
              className="inputLogin"
            />
            <input
              placeholder="Password Again"
              type="password"
              required
              ref={passwordAgain}
              className="inputLogin"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
          </form>
          <button
            className="loginRegisterButton"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log into Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
