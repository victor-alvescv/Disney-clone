import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <Link to={"/detail/IhOD812JkMO3h9OdRecN"}>
          <img src="/images/slider-badging.png" alt="The Mandalorian" />
        </Link>
      </Wrap>

      <Wrap>
        <Link to={"/detail/eFaqnZN7swcYvxgGsG1N"}>
          <img src="/images/slider-scale.png" alt="Encanto" />
        </Link>
      </Wrap>

      <Wrap>
        <Link to={"/detail/lMHWSUSE2ZYrtU5eDj7M"}>
          <img src="/images/slider-badag.png" alt="Moon Knight" />
        </Link>
      </Wrap>

      <Wrap>
        <Link to={"/detail/wVewquw1WwlhiLgjgs2u"}>
          <img src="/images/slider-scales.png" alt="Strange World" />
        </Link>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
      transition: 300ms;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
    opacity: 0;
    transition-duration: 400ms;

    &:hover {
      opacity: 70%;
    }

    &:active {
      opacity: 100%;
    }
  }
  .slick-next {
    right: -75px;
    opacity: 0;
    transition-duration: 400ms;

    &:hover {
      opacity: 70%;
    }

    &:active {
      opacity: 100%;
    }
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      border: 4px solid transparent;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 36px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transition-duration: 400ms;
      overflow-clip-margin: content-box;
      overflow: clip;

      &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8);
      }
    }
  }
`;

export default ImgSlider;
