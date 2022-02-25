import React from "react";

function Signup() {
  return (
    <>
      <div className="loginpage">
        <h2 className="loginheading">SIGN UP</h2>
        {/* <form type="submit" onSubmit={handlelogin}> */}
        <form type="submit" className="loginform">
          <input
            type="text"
            // onChange={onchange}
            placeholder="Enter Your Name"
            className="loginname"
            id="name"
            name="name"
            required
          />
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
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
