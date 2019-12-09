import React from "react";

const CarouselSimple = () => {
  return (
    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: fade; ratio: 9:2; autoplay: true; min-height: 250">
      <ul className="uk-slideshow-items">
          <li>
            <img src="https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" uk-cover />
            <div class="uk-overlay-primary uk-position-cover"></div>
            <div className=" uk-overlay uk-position-center uk-position-small uk-text-center">
                <h2 uk-slideshow-parallax="x: 250,-250" className="uk-margin-remove-bottom">Banff National Park</h2>
                <p uk-slideshow-parallax="x: 200,-200" className="uk-text-lead uk-margin-remove-top">Lorem ipsum dolor sit amet</p> 
                <button uk-slideshow-parallax="" class="uk-button uk-button-default">Watch more</button>
            </div>
          </li>
          <li>
            <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" uk-cover />
            <div class="uk-overlay-primary uk-position-cover"></div>
            <div className=" uk-overlay uk-position-center uk-position-small uk-text-center">
                <h2 uk-slideshow-parallax="x: 250,-250" className="uk-margin-remove-bottom">Yosemite National Park</h2>
                <p uk-slideshow-parallax="x: 200,-200" className="uk-text-lead uk-margin-remove-top">Lorem ipsum dolor sit amet</p> 
                <button uk-slideshow-parallax="" class="uk-button uk-button-default">Watch more</button>
            </div>
          </li>
      </ul>
      
    </div>

  );
};

export default CarouselSimple;
