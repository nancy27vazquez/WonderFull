import React from "react";
import Rate from "../common/Rate";

const CardSimple = ({
  wonderName,
  images = [],
  description,
  rate,
  whoRecommends,
  category,
  daytime
}) => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-small-bottom uk-border-rounded">
        <div className="uk-card-media-top">
          <div className="uk-badge">
            <span className="uk-margin-small-right" uk-icon="check"></span>
            <span className="uk-margin-small-right" uk-icon="heart"></span>
          </div>
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            uk-slideshow="true"
          >
            <ul className="uk-slideshow-items">
              {images.map((image, index) => (
                <li key={index}>
                  <img src={image} alt="" uk-cover="true" />
                </li>
              ))}
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
          <div className="uk-card-badge uk-label">{category}</div>
        </div>
        <div className="uk-card-body uk-padding-medium uk-text-left">
          <div>
            <h3 className="uk-card-title">{wonderName}</h3>
            <span className="uk-margin-small-right" uk-icon="check"></span>
          </div>
          <h3>California, United States</h3>
          <Rate />
          <p>{description}</p>
        </div>
        <div className="uk-card-footer">
          <a href="#" className="uk-button uk-button-text">
            Recommended by <span>{whoRecommends}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSimple;
