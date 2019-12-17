import React from "react";
import ChosenPlaces from "../nextTrip/ChosenPlaces";

const TripInfo = () => {
  return (
    <div>
      <div className="uk-margin-large">
        <h2>Better time to go:</h2>
        <p className="better-time uk-margin">
          <img
            src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576278437/WonderFull/betterAt_uwpr3u.png"
            width="26"
            height="26"
            uk-svg
            className="uk-margin-right"
          />
          Jan - March
        </p>
      </div>
      <ChosenPlaces />
      <div className="uk-margin-medium">
        <h2 className="uk-margin-remove-bottom">
          Our travelers best advices for your trip
        </h2>
        <p className="uk-text-lead uk-margin-remove-top uk-margin-medium-bottom">
          Take in count former travelers experiences in your selected travel
          route
        </p>
      </div>

      <div
        class="uk-grid-small uk-margin uk-grid-row-large uk-child-width-1-4@s uk-text-center uk-flex uk-flex-center"
        uk-grid
      >
        <span className="high1 form-icons-checkbox form-icon-medium">
          Sunblock needed
        </span>
        <span className="high1 form-icons-checkbox form-icon-medium">
          Sunblock needed
        </span>
        <span className="high1 form-icons-checkbox form-icon-medium">
          Sunblock needed
        </span>
        <span className="high1 form-icons-checkbox form-icon-medium">
          Sunblock needed
        </span>
      </div>

      <div className="uk-flex uk-flex-center uk-margin-medium-bottom uk-child-width-1-2 uk-width-large">
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1 uk-margin-large">
            <h4>asdasdasdasd</h4>
            <ul className="uk-list uk-list-large uk-list-divider">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
