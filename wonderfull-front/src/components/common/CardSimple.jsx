import React from "react";
import Rate from "../common/Rate";

const CardSimple = () => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-small-bottom uk-border-rounded">
        <div className="uk-card-media-top">
          <span className="uk-margin-small-right" uk-icon="check"></span>
          <span className="uk-margin-small-right" uk-icon="heart"></span>
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            uk-slideshow="true"
          >
            <ul className="uk-slideshow-items">
              <li>
                <img
                  src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
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
          <div className="uk-card-badge uk-label">Mountain</div>
        </div>
        <div className="uk-card-body uk-padding-medium uk-text-left">
          <div>
            <h3 className="uk-card-title">Yosemite National Park</h3>
            <span className="uk-margin-small-right" uk-icon="check"></span>
          </div>
          <h3>California, United States</h3>
          <Rate />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="uk-card-footer">
          <a href="#" className="uk-button uk-button-text">
            Recommended by <span>Tamara Davis</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSimple;
