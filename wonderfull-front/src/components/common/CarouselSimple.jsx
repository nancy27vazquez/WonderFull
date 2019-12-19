import React from "react";

const CarouselSimple = () => {
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slideshow="animation: fade; ratio: 9:2; autoplay: true; min-height: 250"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img
            src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576687198/WonderFull/Yosemite_3_r51xvm.jpg"
            alt=""
            uk-cover
            className="uk-background-center-center"
          />
          <div className="uk-overlay-primary uk-position-cover"></div>
          <div className=" uk-overlay uk-position-center uk-position-small uk-text-center">
            <h2
              uk-slideshow-parallax="x: 250,-250"
              className="uk-margin-remove-bottom"
            >
              Banff National Park
            </h2>
            <p
              uk-slideshow-parallax="x: 200,-200"
              className="uk-text-lead uk-margin-remove-top"
            >
              Lorem ipsum dolor sit amet
            </p>
            <button
              uk-slideshow-parallax=""
              className="uk-button uk-button-default"
            >
              Watch more
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576687198/WonderFull/Yosemite_3_r51xvm.jpg"
            alt=""
            uk-cover
            className="uk-background-center-center"
          />
          <div className="uk-overlay-primary uk-position-cover"></div>
          <div className=" uk-overlay uk-position-center uk-position-small uk-text-center">
            <h2
              uk-slideshow-parallax="x: 250,-250"
              className="uk-margin-remove-bottom"
            >
              Yosemite National Park
            </h2>
            <p
              uk-slideshow-parallax="x: 200,-200"
              className="uk-text-lead uk-margin-remove-top"
            >
              Lorem ipsum dolor sit amet
            </p>
            <button
              uk-slideshow-parallax=""
              className="uk-button uk-button-default"
            >
              Watch more
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CarouselSimple;
