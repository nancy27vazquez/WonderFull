import React from "react";
import RecommendForm from "../recommend/RecommendForm";
import ChosenPlaces from "../nextTrip/ChosenPlaces";

const TripInfo = () => {
  return (
    <div>
      <div
        class="uk-background-blend-multiply uk-background-secondary uk-height-medium new-trip-back uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
        data-src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576756869/WonderFull/images_4_s3yy17.jpg"
        uk-img
      >
        <h1>Background Image</h1>
      </div>

      <div className="uk-margin-large-top">
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

        <div className="uk-section uk-flex uk-flex-middle">
          <div className="uk-width-1-1">
            <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
              <div className=" uk-margin-auto ">
                <div className="">
                  <div className="uk-inline uk-width-1-1 uk-flex uk-justify-center">
                    <div
                      className="uk-grid-small width-xlarge uk-child-width-1-5@s uk-flex-center uk-text-center uk-grid"
                      uk-grid=""
                    >
                      <div>
                        <label className="form-icons-checkbox form-icon-medium high3">
                          <input
                            id="high3"
                            type="checkbox"
                            name="highlights"
                            className="uk-hidden"
                          />
                          Long walk
                        </label>
                      </div>
                      <div>
                        <label className="form-icons-checkbox form-icon-medium high4">
                          <input
                            id="high4"
                            type="checkbox"
                            name="highlights"
                            className="uk-hidden"
                          />
                          Climbing equipment
                        </label>
                      </div>
                      <div>
                        <label className="form-icons-checkbox form-icon-medium high7">
                          <input
                            id="high7"
                            type="checkbox"
                            name="highlights"
                            className="uk-hidden"
                          />
                          Dangerous at night
                        </label>
                      </div>
                      <div>
                        <label className="form-icons-checkbox form-icon-medium high8">
                          <input
                            id="high8"
                            type="checkbox"
                            name="highlights"
                            className="uk-hidden"
                          />
                          Comfortable clothes
                        </label>
                      </div>

                      <div>
                        <label className="form-icons-checkbox form-icon-medium high10">
                          <input
                            id="high10"
                            type="checkbox"
                            name="highlights"
                            className="uk-hidden"
                          />
                          Rainy place
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="uk-child-width-expand@s uk-text-center uk-flex uk-flex-middle uk-grid-large"
          uk-grid
        >
          <div>
            <div class="uk-padding">
              <div>
                <h4>Prohibitions </h4>
                <ul class="uk-list uk-list-large uk-list-divider">
                  <li>No pets allowed</li>
                  <li>No food allowed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
