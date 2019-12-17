import React from "react";
import CardSelectedPlaces from "../nextTrip/CardSelectedPlaces";

const ChosenPlaces = () => {
  return (
    <div>
      <div uk-slider="center: true">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
        >
          <ul className="uk-slider-items uk-child-width-1-4@s uk-grid uk-grid-small ">
            <li>
              <CardSelectedPlaces />
            </li>
            <li>
              <CardSelectedPlaces />
            </li>
            <li>
              <CardSelectedPlaces />
            </li>
            <li>
              <CardSelectedPlaces />
            </li>
            <li>
              <CardSelectedPlaces />
            </li>
            <li>
              <CardSelectedPlaces />
            </li>
            <li>
              <CardSelectedPlaces />
            </li>
          </ul>

          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-previous
            uk-slider-item="previous"
          ></a>
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-next
            uk-slider-item="next"
          ></a>
        </div>

        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
      </div>
    </div>
  );
};

export default ChosenPlaces;
