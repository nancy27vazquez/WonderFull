import React from "react";
import Menu from "../common/Nav";
import Footer from "../common/Footer";
import WonderDetail from "../detail/detailView";

const Favorites = () => {
  return (
    <div>
      <Menu />
      <div
        class="uk-position-relative uk-visible-toggle"
        tabindex="-1"
        uk-slideshow="animation: fade"
        uk-height-viewport="min-height: 300"
      >
        <ul class="uk-slideshow-items" uk-height-viewport="offset-top: true">
          <li>
            <img
              src="https://getuikit.com/docs/images/photo.jpg"
              alt=""
              uk-cover
            />
            <div class="uk-position-center uk-position-small uk-text-center uk-light">
              <h2 class="uk-margin-remove">Center</h2>
              <p class="uk-margin-remove">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </li>
          <li>
            <img
              src="https://getuikit.com/docs/images/dark.jpg"
              alt=""
              uk-cover
            />
            <div class="uk-position-bottom uk-position-medium uk-text-center uk-light">
              <h3 class="uk-margin-remove">Bottom</h3>
              <p class="uk-margin-remove">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </li>
          <li>
            <img
              src="https://getuikit.com/docs/images/light.jpg"
              alt=""
              uk-cover
            />
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center">
              <h3 class="uk-margin-remove">Overlay Bottom</h3>
              <p class="uk-margin-remove">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </li>
          <li>
            <img
              src="https://getuikit.com/docs/images/dark.jpg"
              alt=""
              uk-cover
            />
            <div class="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
              <h3 class="uk-margin-remove">Overlay Bottom Right</h3>
              <p class="uk-margin-remove">Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
        </ul>

        <div class="uk-light">
          <a
            class="uk-position-center-left uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-previous
            uk-slideshow-item="previous"
          ></a>
          <a
            class="uk-position-center-right uk-position-small uk-hidden-hover"
            href="#"
            uk-slidenav-next
            uk-slideshow-item="next"
          ></a>
        </div>
      </div>

      <WonderDetail />
      <Footer />
    </div>
  );
};

export default Favorites;
