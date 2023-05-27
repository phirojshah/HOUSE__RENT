import React from "react";
import "./Signup.css";
import { NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [UserType, setUserType] = useState("");
  const [secretKey, setSecretkey] = useState("");

  async function registerUser(ev) {
    if (UserType === "Admin" && secretKey !== "HouseRent") {
      ev.preventDefault();
      toast.error("Please Authenticate With Correct Credentials");
    } else {
      ev.preventDefault();

      if (password === confirmPassword) {
        await axios
          .post("http://localhost:5000/api/auth/createuser/", {
            name,
            email,
            contact,
            password,
            UserType,
          })
          .then(() => {
            toast.success("Registration successful. Now you can log in");
            setRedirect(true);
          })
          .catch(() => {
            toast.error("Registration failed. Please try again later");
          });
      } else {
        toast.error("Password and Confirm Password do not match!");
      }
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="wrapper">
      <div className="title">Sign Up</div>
      <form onSubmit={registerUser} encType="multipart/form-data" method="post">
        <div className="m-3 d-flex">
          <h4 className="mx-2 ">Register As</h4>
          <input
            type="radio"
            name="UserType"
            value="User"
            className="mx-2"
            onChange={(ev) => setUserType(ev.target.value)}
          />{" "}
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
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <label>Name</label>
        </div>{" "}
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
            type="number"
            required
            value={contact}
            onChange={(ev) => setContact(ev.target.value)}
          />
          <label>Contact Number</label>
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
        <div className="field">
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
          />
          <label>Confirm-Password</label>
          <div className="signup">
            <input type="submit" value="Create Account" />
          </div>
          <div className="already_account" href="/">
            Already have an account?
          </div>
          <div>
            <NavLink className="login-link" to="/Login">
              Login
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
