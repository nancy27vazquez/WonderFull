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

      <TripInfo />
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
