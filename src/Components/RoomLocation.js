import React from "react";
import styled from "styled-components";
import Roomdescription from "./Roomdescription";
import { NavLink, redirect } from "react-router-dom";
function Viewers() {
  return (
    <>
      <Text>
        <h2>Properties by location</h2>
        <p>
          Each place is a good choice, it will help you make the right decision,
          do not miss the opportunity to discover our wonderful properties.
        </p>
      </Text>
      <Container>
        <Wrap>
          <NavLink to="/Roomdescription">
            <img
              src="https://q-xx.bstatic.com/xdata/images/hotel/max500/87111081.jpg?k=00e9a86557e41125b77c8168b1f3928667a3cf9e061f6b3a89c26ab2ff172d45&o="
              alt="viewerImg"
            />
          </NavLink>
        </Wrap>
        <Wrap>
          <NavLink to="/Roomdescription">
            <img
              src="https://q-xx.bstatic.com/xdata/images/hotel/max500/46929376.jpg?k=d2484e1cb94a6a55dc29025897441141d91145c99ca476be8649851bebfc1c08&o="
              alt="viewerImg"
            />
          </NavLink>
        </Wrap>

        <Wrap>
          <NavLink to="/Roomdescription">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/5e/cb/5b/panauti-community-homestay.jpg?w=700&h=-1&s=1"
              alt="viewerImg"
            />
          </NavLink>
        </Wrap>
        <Wrap>
          <NavLink to="/Roomdescription">
            <img
              src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_1280/MTgyMTI4NDExMzgzMTc4NTY4/the-empty-room.webp"
              alt="viewerImg"
            />
          </NavLink>
        </Wrap>
      </Container>
    </>
  );
}

export default Viewers;

const Text = styled.div`
  display: block;
  padding-top: 20px;
  padding-left: 26px;
  /* margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px; */
`;

const Container = styled.div`
  margin-top: 0px;
  margin-left: 20px;
  margin-right: 20px;
  display: grid;
  padding: 0px 0 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    // '&' concatinate hover to wrap
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
