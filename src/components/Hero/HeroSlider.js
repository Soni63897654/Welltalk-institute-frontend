import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false
  };

  const slides = [
    {
      title: "Speak English Fluently in 30 Days",
      desc: "Join live speaking classes with expert mentors",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
    },
    {
      title: "Improve Communication Skills",
      desc: "Daily practice with real conversations",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      title: "Get Job Ready English",
      desc: "Interview & corporate communication training",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    }
  ];

  return (
    <Slider {...settings}>
      {slides.map((item, i) => (
        <div key={i}>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="hero-overlay">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>

              <Link to="/courses" className="btn btn-light btn-lg mt-3">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HeroSlider;