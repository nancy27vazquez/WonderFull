import React from "react";

const Hero = () => {
  return (
    <div className="uk-position-relative uk-visible-toggle" tabindex="-1" uk-slideshow="ratio: false;animation: fade">
      <ul className="uk-slideshow-items" uk-height-viewport="offset-top: true">
          <li>
            <img src="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb" alt="" uk-cover="" />
            <div className="uk-position-center uk-position-small uk-text-center">
              <p className="uk-text-large hero-subtitle" uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Stand high above Europe's largest waterfall</p>
              <h1 className="hero-title" uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">The Rhine Falls, amusing Switzerland</h1>
              <a className="hero-button uk-button uk-margin-medium-top " uk-slideshow-parallax="y: 150,0,0; opacity: 1,1,0" href="/login">See more</a>
            </div>
          </li>
          <li>
            <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=alberta-amazing-attraction-banff-417074.jpg&fm=jpg" alt="" uk-cover="" />
            <div className="uk-position-center uk-position-small uk-text-center">
              <p className="uk-text-large hero-subtitle" uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Canada’s first national park and the flagship of the nation’s park system</p>
              <h1 className="hero-title" uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Banff National Park, Canada best wonder</h1>
              <a className="hero-button uk-button uk-margin-medium-top " uk-slideshow-parallax="y: 150,0,0; opacity: 1,1,0" href="/login">See more</a>
            </div>
          </li>
          <li>
            <img src="https://images.pexels.com/photos/2619004/pexels-photo-2619004.jpeg?cs=srgb&dl=photo-of-blausee-lake-2619004.jpg&fm=jpg" alt="" uk-cover="" />
            <div className="uk-position-center uk-position-small uk-text-center">
              <p className="uk-text-large hero-subtitle" uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Attract visitors to the city lit up in all its winter glory</p>
              <h1 className="hero-title" uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">Lucerne during Advent</h1>
              <a className="hero-button uk-button uk-margin-medium-top " uk-slideshow-parallax="y: 150,0,0; opacity: 1,1,0" href="/login">See more</a>
            </div>
          </li>
      </ul>
      <a className="uk-position-center-left uk-position-small uk-light" href="#" uk-slidenav-previous="" uk-slideshow-item="previous" ></a>
      <a className="uk-position-center-right uk-position-small uk-light" href="#" uk-slidenav-next="" uk-slideshow-item="next" ></a>
    </div>


  );
};

export default Hero;

