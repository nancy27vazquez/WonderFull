import React from "react";

const Hero = () => {
  return (
    <div
      className="uk-position-relative uk-visible-toggle"
      tabIndex="-1"
      uk-slideshow="ratio: false;animation: fade; autoplay-interval: 2000"
    >
      <ul className="uk-slideshow-items" uk-height-viewport="offset-top: true">
        <li>
          <video
            src="https://res.cloudinary.com/dr95kad7s/video/upload/v1576279548/WonderFull/hero3_th9zj3.mp4"
            alt=""
            uk-cover=""
          />
          <div className="uk-position-center uk-position-small uk-text-center">
            <p
              className="uk-text-large hero-subtitle"
              uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0"
            >
              Dream, search and discover wonderful places
            </p>
            <h1
              className="hero-title"
              uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0"
            >
              Planning the perfect trip
            </h1>
            <a
              className="hero-button uk-button uk-margin-medium-top "
              uk-slideshow-parallax="y: 150,0,0; opacity: 1,1,0"
              href="/login"
            >
              See more
            </a>
          </div>
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576279546/WonderFull/hero1_jgddl0.jpg"
            alt=""
            uk-cover=""
          />
          <div className="uk-position-center uk-position-small uk-text-center">
            <p
              className="uk-text-large hero-subtitle"
              uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0"
            >
              Real recommendations from real experiences
            </p>
            <h1
              className="hero-title"
              uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0"
            >
              Travelers best advices
            </h1>
            <a
              className="hero-button uk-button uk-margin-medium-top "
              uk-slideshow-parallax="y: 150,0,0; opacity: 1,1,0"
              href="/login"
            >
              See more
            </a>
          </div>
        </li>
        <li>
          <img
            src="https://images.pexels.com/photos/2619004/pexels-photo-2619004.jpeg?cs=srgb&dl=photo-of-blausee-lake-2619004.jpg&fm=jpg"
            alt=""
            uk-cover=""
          />
          <div className="uk-position-center uk-position-small uk-text-center">
            <p
              className="uk-text-large hero-subtitle"
              uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0"
            >
              Many natural places for many tastes
            </p>
            <h1
              className="hero-title"
              uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0"
            >
              Explore nature with every sense
            </h1>
            <a
              className="hero-button uk-button uk-margin-medium-top "
              uk-slideshow-parallax="y: 150,0,0; opacity: 1,1,0"
              href="/login"
            >
              See more
            </a>
          </div>
        </li>
      </ul>
      <a
        className="uk-position-center-left uk-position-small uk-light"
        href="#"
        uk-slidenav-previous=""
        uk-slideshow-item="previous"
      ></a>
      <a
        className="uk-position-center-right uk-position-small uk-light"
        href="#"
        uk-slidenav-next=""
        uk-slideshow-item="next"
      ></a>
    </div>
  );
};

export default Hero;
