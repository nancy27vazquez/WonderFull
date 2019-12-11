import React from "react";

const Endpoints = () => {
  return (
    <div class=" uk-flex " uk-grid uk-height-viewport="offset-top: true">
        <div>
            <div class="uk-inline">
                <video src="https://res.cloudinary.com/dr95kad7s/video/upload/v1576046562/travel_dpscai.mp4" loop muted playsinline uk-video="autoplay: inview"></video>
                <div class="uk-overlay-darker uk-position-cover"></div>
                <div class="uk-overlay uk-position-center uk-light">
                    <h1 className="uk-margin-medium-bottom">¿Are you ready to travel?</h1>

                    <form class="uk-grid-small" uk-grid>
                      
                      <div className="uk-flex uk-form-stacked uk-child-width-1-2 uk-margin-large-bottom">
                        <div class="uk-width-1-2@s uk-margin-right">
                            <label class="uk-form-label uk-text-left" for="form-stacked-text">Begin at</label>
                            <input class="uk-input" type="text" placeholder="Mexico City" />
                        </div>
                        <div class="uk-width-1-2@s">
                            <label class="uk-form-label uk-text-left" for="form-stacked-text">End at</label>
                            <input class="uk-input" type="text" placeholder="Denmark" />
                        </div>
                      </div>

                      <div className="uk-margin">
                        <button class="uk-button uk-button-default">Let's go</button>
                      </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Endpoints;
