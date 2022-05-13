import React, { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../Context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Login() {
  const email = useRef(); //to prevent rerendering we use useRef instead of usseState Hook
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  let navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
          <form className="loginBox1" onSubmit={loginHandler}>
            <input
              placeholder="Email"
              type="email"
              ref={email}
              required
              className="inputLogin"
            />
            <input
              placeholder="Password"
              type="password"
              ref={password}
              required
              className="inputLogin"
              minLength="6"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span style={{ textAlign: "center", color: "#1775ee" }}>
              Forgot Password?
            </span>
          </form>
          <button
            className="loginRegisterButton"
            onClick={() => {
              navigate("/");
            }}
          >
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
