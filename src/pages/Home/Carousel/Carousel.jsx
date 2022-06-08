import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "./Carousel.scss";

const contentStyle = {
  height: "700px",
  backgroundPosition: "70% bottom",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function Carousel(props) {
  const dispatch = useDispatch();

  const arrCarouselBG = [
    { img: "./img/Carousel/CarouselBackground/CarouselBG-1.png" },
    { img: "./img/Carousel/CarouselBackground/CarouselBG-2.png" },
    { img: "./img/Carousel/CarouselBackground/CarouselBG-3.png" },
    { img: "./img/Carousel/CarouselBackground/CarouselBG-4.png" },
    { img: "./img/Carousel/CarouselBackground/CarouselBG-5.png" },
  ];

  const settings = {
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <section id="carousel">
      <div className="carousel-background">
        <Slider
          {...settings}
          style={{ zIndex: "1", position: "relative", margin: "auto" }}
        >
          {arrCarouselBG.map((item, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    ...contentStyle,
                    backgroundImage: `url(${item.img})`,
                  }}
                ></div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="carousel-search">
        <div>
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="nav-bar-search input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Find services"
            />
            <button className="input-group-prepend">Search</button>
          </div>
          <p className="d-flex flex-wrap">
            Popular:
            <span className="ml-2">Website Design</span>
            <span>WordPress</span>
            <span>Logo Design</span>
            <span>Dropshiping</span>
          </p>
        </div>
      </div>
      <div className="carousel-partner py-3 d-flex justify-content-center align-items-center">
        <h1>Trusted by:</h1>
        <div className="d-flex justify-content-center">
          <img
            src="./img/Carousel/CarouselPartner/facebook.png"
            alt="facebook"
            title="Facebook"
          />
          <img
            src="./img/Carousel/CarouselPartner/google.png"
            alt="google"
            title="Google"
          />
          <img
            src="./img/Carousel/CarouselPartner/netflix.png"
            alt="netflix"
            title="Netflix"
          />
          <img
            src="./img/Carousel/CarouselPartner/pg.png"
            alt="pg"
            title="P&G"
          />
          <img
            src="./img/Carousel/CarouselPartner/paypal.png"
            alt="paypal"
            title="PayPal"
          />
        </div>
      </div>
    </section>
  );
}

export default memo(Carousel);
