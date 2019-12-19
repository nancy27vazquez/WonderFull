import React from "react";

const CardCategories = () => {
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider
    >
      <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-height-large">
        <li className="categorie-mountain">
          <a href="#">
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-overlay uk-position-bottom uk-light">
              <div className="uk-position-bottom uk-text-left uk-padding-small">
                <h5 className="uk-margin-small-bottom">Mountain</h5>
                <h3 className="uk-margin-remove-top">Tahoe Lake</h3>
              </div>
            </div>
          </a>
        </li>
        <li className="categorie-ocean">
          <a href="#">
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-overlay uk-position-bottom uk-light">
              <div className="uk-position-bottom uk-text-left uk-padding-small">
                <h5 className="uk-margin-small-bottom">Ocean</h5>
                <h3 className="uk-margin-remove-top">Bora Bora</h3>
              </div>
            </div>
          </a>
        </li>
        <li className="categorie-explore">
          <a href="#">
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-overlay uk-position-bottom uk-light">
              <div className="uk-position-bottom uk-text-left uk-padding-small">
                <h5 className="uk-margin-small-bottom">Explore</h5>
                <h3 className="uk-margin-remove-top">Banff Park</h3>
              </div>
            </div>
          </a>
        </li>
        <li className="categorie-urban">
          <a href="#">
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-overlay uk-position-bottom uk-light">
              <div className="uk-position-bottom uk-text-left uk-padding-small">
                <h5 className="uk-margin-small-bottom">Urban</h5>
                <h3 className="uk-margin-remove-top">Villa de Cortés</h3>
              </div>
            </div>
          </a>
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
      ></a>
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
      ></a>
    </div>
  );
};

export default CardCategories;
