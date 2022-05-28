import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  let state = useLocation();
  useEffect(() => {
    toast.success(state.state);
    state = "";
  }, []);
  return (
    <div>
      <div className="container">
        <div className="loginForm">
          <div className="loginForm__input">
            <h1>Login Form</h1>
            <h3>Email :</h3>
            <input type="text" placeholder="Enter your Email" />
            <h3>Password :</h3>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="buttons">
            <button>Submit</button>
          </div>
          <p>
            Don't have an Account{" "}
            <Link className="routerLink" to="/registration">
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Login;
