import React from "react";
import Menu from "../common/Nav";
import Footer from "../common/Footer";
import Endpoints from "./Endpoints";
import MapRoute from "./MapRoute";
import TripInfo from "./TripInfo";

const Global = () => {
  return (
    <div>
      <Menu />
      <Endpoints />
      <MapRoute />
      <div className="uk-grid uk-flex uk-width-large">
        <TripInfo />
      </div>
      <Footer />
    </div>
  );
};

export default Global;

/*
trip average rate
trip average price

superhighlight
recommendations
prohibitions

*/
