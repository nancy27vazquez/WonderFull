import React from "react";

const Endpoints = () => {
  return (
    <div className=" uk-flex " uk-grid uk-height-viewport="offset-top: true">
      <div>
        <div
          className="uk-inline"
          uk-grid
          uk-height-viewport="offset-top: true"
        >
          <video
            src="https://res.cloudinary.com/dr95kad7s/video/upload/v1576282862/WonderFull/nextTrip_offppn.mp4 "
            loop
            muted
            playsinline
            uk-video="autoplay: inview"
          ></video>
          <div className="uk-overlay-darker uk-position-cover"></div>
          <div className="uk-overlay uk-position-center uk-light">
            <h1 className="uk-margin-medium-bottom">
              ¿Are you ready to travel?
            </h1>

            <form className="uk-grid-small" uk-grid>
              {/*<div className="uk-flex uk-form-stacked uk-child-width-1-2 uk-margin-large-bottom">
                
                <div className="uk-width-1-2@s uk-margin-right">
                  <label
                    className="uk-form-label uk-text-left"
                    for="form-stacked-text"
                  >
                    Begin at
                  </label>
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="Mexico City"
                  />
                </div>
                <div className="uk-width-1-2@s">
                  <label
                    className="uk-form-label uk-text-left"
                    for="form-stacked-text"
                  >
                    End at
                  </label>
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="Denmark"
                  />
                </div>
                </div>*/}

              <div className="uk-margin">
                <button className="uk-button uk-button-default">
                  Let's go
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endpoints;
