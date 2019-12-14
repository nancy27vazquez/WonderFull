import React from "react";
import ChosenPlaces from "../nextTrip/ChosenPlaces";

const TripInfo = () => {
  return (
    <div className="uk-text-center uk-margin-large" uk-grid>
      <div className="uk-margin-large-bottom">
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
      <div className="uk-margin-large-bottom">
        <h2>Take in count</h2>
        <div class="uk-child-width-expand@s" uk-grid>
          <div class="uk-child-width-expand@s" uk-grid>
            <div>
              <h4>Divider</h4>
              <ul class="uk-list uk-list-large uk-list-divider">
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
