import React from "react";
import "./component.css";

function Login() {
  //   const handlelogin = () => {};
  //   const onChange = (e) => {
  //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
  //   };
  return (
    <>
      <div className="loginpage">
        <h2 className="loginheading">LOGIN</h2>
        {/* <form type="submit" onSubmit={handlelogin}> */}
        <form type="submit" className="loginform">
          <input
            type="email"
            // onChange={onchange}
            placeholder="Enter Your Email"
            className="loginemail"
            id="email"
            name="email"
            required
          />
          <input
            type="password"
            // onChange={onchange}
            placeholder="Enter Your Password"
            className="loginpassword"
            id="password"
            name="password"
            required
          />
          <button type="submit" id="loginsubmit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
export default Login;
