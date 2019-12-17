import React from "react";
import Rate from "../common/Rate";
import Transportation from "../common/Transportation";

const CardSelectedPlaces = () => {
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img src="https://getuikit.com/docs/images/photo.jpg" alt="" />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">Name of wonder</h3>
          <h4>California, United States</h4>
          <Rate />
          <div></div>
          <Transportation />
        </div>
      </div>
    </div>
  );
};

export default CardSelectedPlaces;
