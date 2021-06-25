import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';


const SignIn = () => {
    return (
        <div className="signIn">
            <span className="signInTitle">Login </span>
         <form className="signInForm">
             <label> Email</label>
             <input type="text" className="signInInput" placeholder="Enter your Email Address" />
             <label>Password</label>
             <input type="password" className="signInInput" placeholder="Enter your password" />
             <button className="signInBtn"> Login</button>
         </form>
         <button className="signInRegisterBtn">
            <Link to="/Register" className="link">Register</Link> 
            </button>
        </div>
    );
};

export default SignIn;