// import React from "react";
// import { Link } from "react-router-dom";
// import style from "./login.module.css";

// function index() {

//   return (
//     <div className={style.login_container}>
//       <div className={style.input_container}>
//        <div> USERNAME<input className={style.input_box} placeholder="USERNAME" /></div>
//        <div> PASSWORD<input className={style.input_box} placeholder="PASSWORD" /></div>
//       </div>

//       <div className={style.btn_container}>
//         <button className={style.btn_login}>LOGIN</button>
//         <Link to="/Register"><button className={style.btn_login}>REGISTER</button></Link>
//       </div>
//     </div>
//   );
// }

// export default index;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
// import style from "./login.module.css";
export default function Index() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submithandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/voting");
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
          <h2>Login</h2>
          <div class="input-group">
            <input
              type="text"
              name="loginUser"
              id="loginUser"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label for="loginUser">User Email</label>
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
          <p class="register">
            Not a member?{" "}
            <Link to="/Register" className="regLink">
              Register here!
            </Link>
          </p>
          <p className="register">
            If You are Admin?{" "}
            <Link to="/AdminLogin" className="regLink">
              Admin Login!
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
