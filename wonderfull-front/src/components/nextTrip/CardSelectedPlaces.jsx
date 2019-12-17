import React from "react";
import Rate from "../common/Rate";
import Transportation from "../common/Transportation";

const CardSelectedPlaces = () => {
  return (
    <div>
      <div class="uk-height-large uk-background-cover card-minimal uk-card uk-width-1-1@m uk-margin uk-flex uk-flex-bottom uk-padding-small">
        <div class="card-badge-left">
          <Transportation />
        </div>

        <div className="uk-card-footer uk-padding-small">
          <h3 class="uk-card-title uk-margin-remove-bottom uk-light">
            Wonder name
          </h3>
          <h4 className="uk-light uk-margin-remove-top">Country, state</h4>
          <Rate />
        </div>
      </div>
    </div>
  );
};

export default CardSelectedPlaces;
