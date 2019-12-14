import React from "react";
import CardSelectedPlaces from "../nextTrip/CardSelectedPlaces";

const ChosenPlaces = () => {
  return (
    <div>
      <div uk-slider="center: true">
        <div
          class="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
        >
          <ul class="uk-slider-items uk-child-width-1-4@s uk-grid">
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
            class="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-previous
            uk-slider-item="previous"
          ></a>
          <a
            class="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-next
            uk-slider-item="next"
          ></a>
        </div>

        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
      </div>
    </div>
  );
};

export default ChosenPlaces;
