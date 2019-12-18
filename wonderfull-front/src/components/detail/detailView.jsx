import React from "react";

const WonderDetail = () => {
  return (
    <div>
      <div class="uk-child-width-1-1@s uk-text-center uk-light" uk-grid>
        <div>
          <div class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle auth-bg">
            <div class="uk-overlay-primary uk-position-cover"></div>
            <div class="uk-overlay uk-position-center uk-light">
              <h2 className="uk-margin-remove-bottom">
                Yosemite National Park
              </h2>
              <p className="uk-text-lead uk-margin-remove-top">
                California, United States
              </p>
              <div class="">
                <span
                  className="save-wonder-button uk-margin-small-right"
                  uk-icon="star"
                  id="tofavorites"
                ></span>
                <span
                  className="save-wonder-button uk-margin-small-right"
                  uk-icon="heart"
                  id="tonexttrip"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WonderDetail;

/*
address/map
tags
rate 
price
months
daytime
days
who recommends
description
superhighlight
recommendations
prohibitions
testimonials
website
phone
mail 
transportation
leave a comment
 */
