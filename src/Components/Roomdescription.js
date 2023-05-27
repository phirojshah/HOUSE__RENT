import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container, Row, Col } from "react-bootstrap";

function RoomDescription() {
  return (
    <div className="mt-4  ">
      <Row>
        <Col md={1}>
          <LocationOnIcon fontSize="large" />
          <h3 className="Location_text ms-2">Royal Bakhuldol</h3>
        </Col>
        <Col md={5} style={{ height: "10rem" }}>
          <div className="map-container img-fluid mx-4 p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.0824114269662!2d85.53373409746754!3d27.62196417997669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09dc051b9583%3A0xa6ac86eef12c596f!2sBhakundol%20Khaja%20ghar!5e0!3m2!1sen!2snp!4v1680262911899!5m2!1sen!2snp"
              width="100%"
              height="400%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </Col>
        <Col md={6}>
          <img
            className="photo img-fluid mt-0"
            src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_1280/MTgyMTI4NDExMzgzMTc4NTY4/the-empty-room.webp"
            alt="Room"
          />
        </Col>
      </Row>

      <Row className="mt-2 p-5">
        <Col md={6}>
          <div className="info">
            <h4>Room Properties:</h4>
            <ul className="property-list">
              <li>WiFi</li>
              <li>Complimentary water</li>
              <li>Flat screen LCD TV</li>
              <li>Tea/coffee making facilities</li>
              <li>Fan</li>
              <li>Hairdryer</li>
              <li>Pure white linen and towels</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="mt-1 p-5">
        <Col>
          <div className="description">
            <h5>
              All our guestrooms are elegantly furnished with handmade furniture
              and include luxury en-suite facilities with complimentary
              amenities pack, flat screen LCD TV, tea/coffee making facilities,
              fan, hairdryer, and the finest pure white linen and towels. All
              our guestrooms are elegantly furnished with handmade furniture and
              include luxury en-suite facilities with complimentary amenities
              pack, flat screen LCD TV, tea/coffee making facilities, fan,
              hairdryer, and the finest pure white linen and towels. All our
              guestrooms are elegantly furnished with handmade furniture and
              include luxury en-suite facilities with complimentary amenities
              pack, flat screen LCD TV, tea/coffee making facilities, fan,
              hairdryer, and the finest pure white linen and towels.
            </h5>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default RoomDescription;
