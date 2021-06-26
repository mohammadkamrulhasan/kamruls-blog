import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";


const SignIn = () => {
    const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
    return (
      <div className="signIn">
      <span className="signInTitle">Login</span>
      <form className="signInForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="signInInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="signInInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="signInBtn" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="signInRegisterBtn">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
    );
};

export default SignIn;