import React from "react";

const MapRoute = () => {
  /*mapboxgl.accessToken =
    "pk.eyJ1IjoibmV2YWRnIiwiYSI6ImNrMThrNGZzaTBoaGozcHJ2Z2Rubmp5czQifQ.zhOhtaww8YUX_OnbMakjhA";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11"
  });*/

  return (
    <div className="uk-text-center" uk-grid>
      <div>
        <div class="uk-background-secondary uk-light uk-padding uk-panel uk-height-medium uk-light">
          <p class="uk-h4">MAP SECTION HERE</p>
          <div id="map" style="width: 400px; height: 300px;"></div>
        </div>
      </div>
    </div>
  );
};

export default MapRoute;
