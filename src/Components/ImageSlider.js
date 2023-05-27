import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img
          src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_1280/MTgyMTI4NDExMzgzMTc4NTY4/the-empty-room.webp"
          alt="Slider-Image"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/5e/cb/5b/panauti-community-homestay.jpg?w=700&h=-1&s=1"
          alt="Slider-Image"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/max500/46875371.jpg?k=d9a293e663f9716ffe4248355ec026b43130e35272d83f9ab1759a0e14fcec6e&o="
          alt="Slider-Image"
        />
      </Wrap>
      <Wrap>
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/max500/46929376.jpg?k=d2484e1cb94a6a55dc29025897441141d91145c99ca476be8649851bebfc1c08&o="
          alt="Slider-Image"
        />
      </Wrap>

      <Wrap>
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/max500/87111081.jpg?k=00e9a86557e41125b77c8168b1f3928667a3cf9e061f6b3a89c26ab2ff172d45&o="
          alt="Slider-Image"
        />
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = styled(Slider)`
  margin-top: 0px;
  overflow: hidden;

  .slick-list {
    overflow: visible;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  height: 500px;
  width: 200px;

  img {
    background: transparent;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border: 4px solid transparent;
  }
`;
