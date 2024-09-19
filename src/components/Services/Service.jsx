import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import Slider from "react-slick";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Service() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let tl2 = gsap.timeline();

  useGSAP(() => {
    tl2.from(
      ".heading1",
      {
        y: -50,
        scale: 0.6,
        duration: 1,
      },
      "ll"
    );
    tl2.from(
      ".cardd",
      {
        y: -40,
        // x: -40,
        duration: 1,
      },
      "ll"
    );
  });

  return (
    <div className="text-white h-[80vh] cardpage slider-container">
      <div className="main slider-container h-[80vh] p-8">
        <h1 className="heading1 text-4xl p-4 text-center">
          My <span className="text-yellow-500">Services</span>
        </h1>
        <div className="slider gap-4 ">
          <Slider {...settings}>
            <Card card="Web Development" />
            <Card card="Web Design" />
            <Card card="Machine Learning" />
            <Card card="Data Science" />
            <Card card="Clean Code" />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Service;
