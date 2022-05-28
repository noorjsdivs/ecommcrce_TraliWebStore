import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const handleRegistration = () => {
    if (name == "") {
      toast.error("Name is required !");
    } else if (email == "") {
      toast.error("Email is required !!");
    } else if (password == "") {
      toast.error("Password is required !!!");
    } else if (cpassword == "") {
      toast.error("Please confirm your password");
    } else if (password != cpassword) {
      toast.error("Password not Matched !!");
    } else {
      // toast.success("Account Created Successfully...");
      navigate("/login", { state: "Account Created Successfully" });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="registrationForm">
          <div className="registrationForm__input">
            <h1>Registration Form</h1>
            <h3>Name :</h3>
            <input
              type="text"
              placeholder="Enter your Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <h3>Email :</h3>
            <input
              type="text"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>Password :</h3>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <h3>Confirm Password :</h3>
            <input
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>

          <div className="buttons">
            <button onClick={handleRegistration}>Submit</button>
          </div>
          <p>
            Have an Account{" "}
            <Link to="/login" className="routerLink">
              <span>Log In</span>
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

export default Registration;
