import React from "react";
// import CardSelectedPlaces from "../nextTrip/CardSelectedPlaces";
import Transportation from "../common/Transportation";
import Rate from "../common/Rate";

const ChosenPlaces = () => {
  return (
    <div>
      <div uk-slider="center: true">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
        >
          <ul className="uk-slider-items uk-child-width-1-4@s uk-grid uk-grid-small ">
            <li>
              <div>
                <div class="uk-height-large uk-background-cover card-minimal card1 uk-card uk-width-1-1@m uk-margin uk-flex uk-flex-bottom uk-padding-small">
                  <div class="card-badge-left">
                    <Transportation />
                  </div>

                  <div className="uk-card-footer uk-padding-small">
                    <h3 class="uk-card-title uk-margin-remove-bottom uk-light">
                      National Reserve
                    </h3>
                    <h4 className="uk-light uk-margin-remove-top">
                      Ontario, Canada
                    </h4>
                    <Rate />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div>
                <div class="uk-height-large uk-background-cover card-minimal card2 uk-card uk-width-1-1@m uk-margin uk-flex uk-flex-bottom uk-padding-small">
                  <div class="card-badge-left">
                    <Transportation />
                  </div>

                  <div className="uk-card-footer uk-padding-small">
                    <h3 class="uk-card-title uk-margin-remove-bottom uk-light">
                      Dis House
                    </h3>
                    <h4 className="uk-light uk-margin-remove-top">Australia</h4>
                    <Rate />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div>
                <div class="uk-height-large uk-background-cover card-minimal card3 uk-card uk-width-1-1@m uk-margin uk-flex uk-flex-bottom uk-padding-small">
                  <div class="card-badge-left">
                    <Transportation />
                  </div>

                  <div className="uk-card-footer uk-padding-small">
                    <h3 class="uk-card-title uk-margin-remove-bottom uk-light">
                      Machu Picchu
                    </h3>
                    <h4 className="uk-light uk-margin-remove-top">
                      Cusco, Peru
                    </h4>
                    <Rate />
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div>
                <div class="uk-height-large uk-background-cover card-minimal card4 uk-card uk-width-1-1@m uk-margin uk-flex uk-flex-bottom uk-padding-small">
                  <div class="card-badge-left">
                    <Transportation />
                  </div>

                  <div className="uk-card-footer uk-padding-small">
                    <h3 class="uk-card-title uk-margin-remove-bottom uk-light">
                      Machu Picchu
                    </h3>
                    <h4 className="uk-light uk-margin-remove-top">
                      Cusco, Peru
                    </h4>
                    <Rate />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div class="uk-height-large uk-background-cover card-minimal card5 uk-card uk-width-1-1@m uk-margin uk-flex uk-flex-bottom uk-padding-small">
                  <div class="card-badge-left">
                    <Transportation />
                  </div>

                  <div className="uk-card-footer uk-padding-small">
                    <h3 class="uk-card-title uk-margin-remove-bottom uk-light">
                      Aurora Borealis
                    </h3>
                    <h4 className="uk-light uk-margin-remove-top">
                      Alberta, Canada
                    </h4>
                    <Rate />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div class="uk-height-large uk-background-cover card-minimal card6 uk-card uk-width-1-1@m uk-margin uk-flex uk-flex-bottom uk-padding-small">
                  <div class="card-badge-left">
                    <Transportation />
                  </div>

                  <div className="uk-card-footer uk-padding-small">
                    <h3 class="uk-card-title uk-margin-remove-bottom uk-light">
                      Lake Tahoe
                    </h3>
                    <h4 className="uk-light uk-margin-remove-top">
                      Misissipi, United States
                    </h4>
                    <Rate />
                  </div>
                </div>
              </div>
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

        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
      </div>
    </div>
  );
};

export default ChosenPlaces;
