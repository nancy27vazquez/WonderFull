import React from "react";
import Rate from "../common/Rate";
import SaveWonderButtons from "./SaveWonderButtons";
import Daytime from "../common/Daytime";

const CardHorizontal = () => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom uk-border-rounded">
        <div className="uk-card-media-top">
          <SaveWonderButtons />
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            uk-slideshow="true"
          >
            <div className="card-badge-bottom uk-label">Mountain</div>
            <ul className="uk-slideshow-items">
              <li>
                <img
                  src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576687198/WonderFull/Yosemite_1_uprusp.jpg"
                  alt="hello"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576687198/WonderFull/Yosemite_1_uprusp.jpg"
                  alt="hello"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576687198/WonderFull/Yosemite_1_uprusp.jpg"
                  alt="hello"
                />
              </li>
            </ul>

            <a
              className="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-previous="true"
              uk-slideshow-item="previous"
            ></a>
            <a
              className="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              uk-slidenav-next="true"
              uk-slideshow-item="next"
            ></a>
          </div>
        </div>
        <div className="uk-card-body uk-padding-medium uk-text-left">
          <div>
            <a href="#" className="uk-button uk-button-text">
              Recommended by <span>Tamara Davis</span>
            </a>
            <div className="uk-flex uk-flex-between uk-flex-middle">
              <h3 className="uk-margin-remove-bottom">
                Yosemite National Park
              </h3>
              <Daytime />
            </div>
          </div>
          <h5 className="uk-margin-small-top">California, United States</h5>
          <Rate />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
