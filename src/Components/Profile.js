import React, { useEffect } from "react";
import "./Profile.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  //GET user data

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/auth/getuser/646df66d92e114e1637f98ec`
      );

      const { data } = response;

      console.log(data);
      const { name, email, contact, password } = data;

      setName(name);
      setEmail(email);
      setContact(contact);
      setPassword(password);
    } catch (error) {
      console.error(error);
    }
  }

  async function registerUser(ev) {
    ev.preventDefault();

    await axios
      .put("http://localhost:5000/api/auth/createuser/", {
        name,
        email,
        contact,
        password,
      })
      .catch(() => {
        toast.error("Update failed. Please try again later");
      });
  }

  return (
    <div className="wrapper">
      <div className="title">USER PROFILE</div>

      <form onSubmit={registerUser} encType="multipart/form-data" method="post">
        <div className="field">
          <input
            type="text"
            required
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <label>Name</label>
        </div>
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
          <div className="signup">
            <input type="submit" value="UPDATE" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
