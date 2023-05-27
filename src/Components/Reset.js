import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
import "./Login";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Reset() {
  const [email, setEmail] = useState("");
  //   const [redirect, setRedirect] = useState(false);
  // const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/forgot-password/", {
        email,
      });
      // setUser(data);
      alert("Link generated successful");
      //   setRedirect(true);
    } catch (e) {
      alert("Login failed");
    }
  }

  //   if (redirect) {
  //     return <Navigate to={"/"} />;
  //   }

  return (
    <div className="wrapper">
      <div className="title">Reset Your password</div>
      <form onSubmit={handleLoginSubmit}>
        <div className="field">
          <input
            type="text"
            required
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <label>Email Address</label>
        </div>

        <div className="field">
          <input type="submit" value="Submit" />
        </div>
        <div className="signup-link">
          {" "}
          <NavLink className="/Signup" to="/Login">
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Reset;
