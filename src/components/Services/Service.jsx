import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import Slider from "react-slick";
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
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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

  //   let tl2 = gsap.timeline();

  //   useGSAP(() => {
  //     tl2.from(".cardd", {
  //       y: -40,
  //       x: -40,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: ".cardpage",
  //         markers: true,
  //         scroller: "body",
  //         top: "top 0%",
  //         end: "end -80%",
  //         marker: true,
  //         scrub: 2,
  //       },
  //     });
  //   });
  //   useGSAP(() => {
  //     tl2.from(".heading1", {
  //       y: -50,
  //       scale: 0.6,
  //       duration: 1,
  //       delay: 0.5,
  //       scrollTrigger: {
  //         trigger: ".cardpage",
  //         scroller: "body",
  //         top: "top 50%",
  //         end: "end -100%",
  //         scrub: 2,
  //       },
  //     });
  //   });

  return (
    <div className="text-white h-[80vh] cardpage slider-container">
      <div className="main slider-container h-[80vh] p-8">
        <h1 className="heading1 text-4xl p-4 text-center">
          My <span className="text-yellow-500">Services</span>
        </h1>
        <div className="slider ">
          <Slider {...settings}>
            <Card card="Web Development" />
            <Card card="Web Design" />
            <Card card="Webflow Development" />
            <Card card="Photography" />
            <Card card="Clean Code" />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Service;
