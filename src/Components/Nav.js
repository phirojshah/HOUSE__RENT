import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";

import SearchInput from "./Form/SearchInput";
import { useState, useEffect } from "react";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Perform the logout logic here, such as clearing the token from localStorage
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white navbar-light bg-light">
        <div className="container-fluid">
          <Logo src="https://scontent.xx.fbcdn.net/v/t1.15752-9/326701461_507406914664658_4514608824772342095_n.png?stp=dst-png_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=b-cIaIixrZQAX8a1a3J&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQakFRTrdv-a1Jkf8NdTa-JHltpMpjWjZ5Qoh5jPl3BKw&oe=6481791F" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li className="nav-item ">
                <Link
                  className="nav-link active me-5"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active me-5"
                  aria-current="page"
                  to="/Product"
                >
                  ROOMS
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active me-5"
                  aria-current="page"
                  to="/Contact"
                >
                  CONTACT
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active me-5"
                  aria-current="page"
                  to="/AboutUS"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active me-5"
                  aria-current="page"
                  to="/Blogs"
                >
                  BLOG
                </Link>
              </li>
              <li className="nav-item ">
                <Login className="mt-2">
                  {isLoggedIn ? (
                    <li>
                      <SearchInput />
                    </li>
                  ) : (
                    <NavLink to="/Signup">
                      <span>SignUp</span>
                    </NavLink>
                  )}
                </Login>
                {/* <SearchInput /> */}
              </li>
            </ul>
            <Login>
              {isLoggedIn ? (
                <NavLink to="/Login">
                  <span onClick={handleLogout}>Logout</span>
                </NavLink>
              ) : (
                <NavLink to="/Login">
                  <span>Login</span>
                </NavLink>
              )}
            </Login>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

const Logo = styled.img`
  height: 80px;
  width: 80px;
`;
const Login = styled.div`
  margin-right: 50px;
  a {
    text-decoration: none;
    color: black;
  }
`;
