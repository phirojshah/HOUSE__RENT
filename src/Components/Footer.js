import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" mt-3 text-center text-lg-start bg-dark text-white">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link className="me-2" to="https://www.facebook.com/">
            <FaFacebook />
          </Link>
          <Link className="me-2" to="https://www.instagram.com">
            <FaInstagram />
          </Link>
          <Link className="me-2" to="https://www.twitter.com">
            <FaTwitter />
          </Link>
          <Link className="me-2" to="https://www.github.com">
            <FaGithub />
          </Link>
          <Link className="me-2" to="https://www.linkedinIn.com">
            <FaLinkedinIn />
          </Link>
          <Link className="me-2" to="https://www.youtube.com">
            <FaYoutube />
          </Link>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>House Rent
              </h6>
              <p style={{ color: "#fff", fontFamily: "Verdana" }}>
                The platform needed to the all of the renters. The platform that
                provides you all to find the best of the best place to rent and
                live. "We are here to find you the best of the best"
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <Link to="/AboutUS" className="text-reset">
                  About
                </Link>
              </p>
              <p>
                <Link to="/Contact" className="text-reset">
                  Contact
                </Link>
              </p>
              <p>
                <Link to="" className="text-reset">
                  Add Your Property
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">links</h6>
              <p>
                <Link to="/Login" className="text-reset">
                  Login
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Privacy
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Help
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> 28-kilo, Dhulikhel,Kavre
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                houserent138@outlook.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>+977 9843257468
              </p>
              <p>
                <i className="fas fa-print me-3"></i>+977 043215678{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2021 Copyright:
        <Link className="text-reset fw-bold" to="/">
          {" "}
          House Rent
        </Link>
      </div>
    </footer>
  );
}
