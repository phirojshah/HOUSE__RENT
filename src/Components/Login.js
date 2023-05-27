import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "./context/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [UserType, setUserType] = useState("");
  const [secretKey, setSecretkey] = useState("");
  const [auth, setAuth] = useAuth();

  async function handleLoginSubmit(ev) {
    if (UserType === "Admin" && secretKey !== "HouseRent") {
      ev.preventDefault();
      toast.error("Please Enter Correct Credentials");
    } else {
      ev.preventDefault();
      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/login/",
          {
            email,
            password,
            UserType,
          }
        );
        setAuth({
          ...auth,
          user: data.user,
          token: data.token,
        });
        localStorage.setItem("auth", JSON.stringify(data));
        localStorage.setItem("User", data.UserType);
        localStorage.setItem("token", data.authtoken);
        toast.success("Login successful");
        setRedirect(true);
      } catch (e) {
        toast.error("Enter Valid Credentials");
      }
    }
  }
  if (redirect) {
    if (UserType === "Admin") {
      return <Navigate to={"/admindashboard"} />;
    } else {
      return <Navigate to={"/"} />;
    }
  }

  return (
    <div className="wrapper">
      <div className="title">Login Form</div>
      <form onSubmit={handleLoginSubmit}>
        <div className="m-3 d-flex">
          <h4 className="mx-2 ">Login As</h4>
          <input
            type="radio"
            name="UserType"
            value="User"
            className="mx-2"
            onChange={(ev) => setUserType(ev.target.value)}
          />
          <p className="my-1">User</p>
          <input
            className="mx-2 my-2"
            type="radio"
            name="UserType"
            value="Admin"
            onChange={(ev) => setUserType(ev.target.value)}
          />{" "}
          <p className="my-1">Admin</p>
        </div>
        {UserType === "Admin" ? (
          <div className="field">
            <input
              type="password"
              placeholder="secret-key"
              onChange={(ev) => setSecretkey(ev.target.value)}
            />
          </div>
        ) : null}
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
          <input
            type="password"
            required
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="content">
          <div className="pass-link">
            <a href="/Reset">Forgot password?</a>
          </div>
        </div>
        <div className="field">
          <input type="submit" value="Login" />
        </div>
        <div className="signup-link">
          {" "}
          <NavLink className="/Signup" to="/Signup">
            Signup now
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
