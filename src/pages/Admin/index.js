import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "../Login/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";

function Index() {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

   const submithandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/AdminPage");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
   return (
    <>
      <div class="login-wrapper">
        <form action="" class="form">
          <h2>Admin Login</h2>
          <div class="input-group">
            <input
              type="text"
              name="loginUser"
              id="loginUser"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label for="loginUser">Admin Email</label>
          </div>
          <div class="input-group">
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label for="loginPassword">Password</label>
          </div>
          <button
            type="submit"
            value="Login"
            className="submit-btn"
            onClick={submithandler}
          >
            Login
          </button>
          <p className="register">
            If You are User?{" "}
            <Link to="/" className="regLink">
              Login here!
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Index
