import React from "react";
import Rate from "../common/Rate";

const CardMinimal = () => {
  return (
    <div>
      <div class="uk-height-large uk-background-cover card-minimal uk-card uk-width-1-1@m uk-margin uk-flex uk-flex-bottom">
        <div class="card-badge-left">
          <span className="uk-margin-small-right" uk-icon="check"></span>
        </div>
        <div class="uk-card-badge">
          <span className="uk-margin-small-right" uk-icon="check"></span>
          <span className="uk-margin-small-right" uk-icon="heart"></span>
        </div>

        <div className="uk-card-footer">
          <h3 class="uk-card-title margin-remove-bottom uk-light">
            Wonder name here
          </h3>
          <h4 className="uk-light">Country, state</h4>
          <Rate />
          <p>
            Recommended by <span>Juanito Pérez</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardMinimal;
