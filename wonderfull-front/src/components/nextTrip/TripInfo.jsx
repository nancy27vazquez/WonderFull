import React from "react";

const TripInfo = () => {
  return (
    <div className="uk-text-center uk-margin-large" uk-grid>
      <div>
        <h2>Better time to go:</h2>
        <p className="uk-text-lead">Jan - March</p>
      </div>
      <div uk-slider="center: true; autoplay: true; autoplay-interval: 4000">

        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-2">

            <ul class="uk-slider-items uk-child-width-1-4@s uk-grid">
                <li>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img src="https://getuikit.com/docs/images/photo.jpg" alt="" />
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">Headline</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img src="https://getuikit.com/docs/images/dark.jpg" alt="" />
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">Headline</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img src="https://getuikit.com/docs/images/light.jpg" alt="" />
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">Headline</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img src="https://getuikit.com/docs/images/photo2.jpg" alt="" />
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">Headline</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-media-top">
                            <img src="https://getuikit.com/docs/images/photo3.jpg" alt="" />
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">Headline</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </li>
            </ul>

            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

        </div>

        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

    </div>
    </div>
  );
};

export default TripInfo;
