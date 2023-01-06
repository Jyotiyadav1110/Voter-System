import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { auth,} from "../../firebase";
import { useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// import style from "./register.module.css";

function Index() {

const navigate = useNavigate();

const[email,setEmail] = useState();
const[password,setPassword] = useState();

 const handleSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            });
    }

  return (

//     <div className={style.login_container}>
//       <div className={style.input_container}>
//         <div className={style.input_section}>
//           {" "}
//           Username
//           <input className={style.input_box} placeholder="Enter username" />
//         </div>
//         <div className={style.input_section}>
//           {" "}
//           Email
//           <input className={style.input_box} placeholder="user email" />
//         </div>
//         <div className={style.input_section}>
//           {" "}
//           Password
//           <input className={style.input_box} placeholder="password" />
//         </div>
//         <div className={style.input_section}>
//           {" "}
//           Confirm Password
//           <input className={style.input_box} placeholder="confirm password" />
//         </div>
//       </div>

//       <div className={style.btn_container}>
//         <button className={style.btn_login}>REGISTER</button>
//         <p>Do you have an Account? <span style={{fontWeight:"700"}}>LOGIN</span></p>
//       </div>
//     </div>
<div className="login-wrapper">
      <form action="" className="form" >
        <h2>Register Page</h2>
         <div className="input-group">
          <input type="text" name="loginUser" id="loginUser" required />
          <label for="loginUser">Enter User Name</label>
        </div>
        <div className="input-group">
          <input type="email" name="loginUserEmail" id="loginUserEmail" onChange={(e) => setEmail(e.target.value)} required />
          <label for="loginUserEmail">Enter User Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <label for="loginPassword">Password</label>
        </div>

         {/* <div className="input-group">
          <input
            type="number"
            name="number"
            id="mobnumber"
            required
          />
          <label for="mobnumber">Phone No</label>
        </div> */}
        <small className="register"><i>
          By signing-in you agree to the Voter System Conditions of Use.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.</i>
        </small>
        <div className="reg-btn">
          <button type="submit" value="Register" className="submit-btn"onClick={handleSubmit} >Register</button>
        </div>
        <p>
          You do have an account? <Link to="/" className="regLink">Login</Link>
        </p>
         
      </form>
    </div>
  );
}

export default Index;

