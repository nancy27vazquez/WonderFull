import React from "react";

const CardCategories = () => {
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
        <li>
          <a href="#">
            <img src="https://getuikit.com/docs/images/slider1.jpg" alt=""/>
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-overlay uk-position-bottom uk-light">
              <div className="uk-position-bottom uk-text-left uk-padding-small">
                <h3 className="uk-margin-small-bottom">National Sanctuarium</h3>
                <h6 className="uk-margin-remove-top">Alberta, Canada</h6>
              </div>
            </div>
          </a>
        </li>
        <li>
        <a href="#">
            <img src="https://getuikit.com/docs/images/slider2.jpg" alt=""/>
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-overlay uk-position-bottom uk-light">
              <div className="uk-position-bottom uk-text-left uk-padding-small">
                <h3 className="uk-margin-small-bottom">Banff National Park</h3>
                <h6 className="uk-margin-remove-top">Alberta, Canada</h6>
              </div>
            </div>
          </a>  
        </li>
        <li>
          <a href="#">
            <img src="https://getuikit.com/docs/images/slider3.jpg" alt=""/>
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-overlay uk-position-bottom uk-light">
              <div className="uk-position-bottom uk-text-left uk-padding-small">
                <h3 className="uk-margin-small-bottom">Lake Yosemite</h3>
                <h6 className="uk-margin-remove-top">California, United States</h6>
              </div>
            </div>
          </a>  
        </li>
        <li>
          <a href="#">
            <img src="https://getuikit.com/docs/images/slider4.jpg" alt=""/>
            <div className="uk-overlay-primary uk-position-cover"></div>
            <div className="uk-overlay uk-position-bottom uk-light">
              <div className="uk-position-bottom uk-text-left uk-padding-small">
                <h3 className="uk-margin-small-bottom">Villa de Cortés</h3>
                <h6 className="uk-margin-remove-top">Malaga, Spain</h6>
              </div>
            </div>
          </a>  
        </li>
    </ul>

    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>


  );
};

export default CardCategories;
