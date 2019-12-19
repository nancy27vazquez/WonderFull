import React from "react";
import Rate from "./Rate";
import SaveWonderButtons from "./SaveWonderButtons";

const CardSimple = ({
  wonderName,
  images = [],
  description,
  whoRecommends,
  category
}) => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-small-bottom uk-border-rounded">
        <div className="uk-card-media-top">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            uk-slideshow="true"
          >
            <img
              src="https://res.cloudinary.com/dr95kad7s/image/upload/v1576687198/WonderFull/borabora_1_hbxlkx.jpg"
              className="uk-height-medium"
            />
            <SaveWonderButtons />
            <div className="card-badge-bottom uk-label">OCEAN</div>
          </div>
        </div>
        <div className="uk-card-body uk-padding-medium uk-text-left">
          <div>
            <h3 className="uk-card-title">Bora Bora</h3>
          </div>
          <h5>Tahiti</h5>
          <Rate />
          <p>
            Bora Bora is a Pacific island in the territory of French Polynesia,
            part of the Society Islands halfway South America and Australia.
          </p>
        </div>
        <div className="uk-card-footer">
          <a href="#" className="uk-button uk-button-text">
            Recommended by <span>Patrick Joseph Dunn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSimple;
