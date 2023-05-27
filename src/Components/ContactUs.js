import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./ContactUs.css";
import { useState } from "react";
import axios from "axios";
export default function ContactUs() {
  // function clickMail() {
  //   // window.open("mailto: poudyalamit20@gmail.com");

  // }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/user-details",
        {
          name,
          email,
          message,
        }
      );
      setStatus(response.data.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("Email sending failed");
    }
  };

  return (
    <>
      <section className="contact">
        <div className="contentss">
          <h2>Contact Us</h2>
          <p>
            This is the contact page of our website 'House Rent'. You can
            contact us through this page and the contacts give below. You can
            submit the given form below to contact us as well.
          </p>
        </div>
        <div className="container">
          <div className="contactinfo">
            <div className="box">
              <div className="icon">
                <FaMapMarkerAlt></FaMapMarkerAlt>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  45200 Kathmandu University<br></br>Dhulikhel, Kavre
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaPhoneAlt></FaPhoneAlt>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>9867500984, 9847098678</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FaEnvelope></FaEnvelope>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>renthouse699@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactform">
            <form>
              <h2>Send Message</h2>
              <div className="inputbox">
                <input
                  type="text"
                  required="required"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Full Name</span>
              </div>
              <div className="inputbox">
                <input
                  type="text"
                  name="email"
                  required="required"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
              </div>
              <div className="inputbox">
                <textarea
                  required="required"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className="inputbox" onClick={handleSubmit}>
                <input
                  type="submit"
                  value="send"
                  // href="mailto: abc@example.com"
                />
                {status && <p>{status}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
