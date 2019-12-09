import React from "react";

const CardCategories = () => {
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
        <li>
            <img src="https://getuikit.com/docs/images/slider1.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="https://getuikit.com/docs/images/slider2.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="https://getuikit.com/docs/images/slider3.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="https://getuikit.com/docs/images/slider4.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="https://getuikit.com/docs/images/slider5.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
    </ul>

    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
  );
};

export default CardCategories;
