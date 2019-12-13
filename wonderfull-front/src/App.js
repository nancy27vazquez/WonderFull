import React from "react";
import Router from "./Router";
import Nav from "./components/common/Nav";
import "./App.css";

/*mapboxgl.accessToken =
  "pk.eyJ1IjoibmV2YWRnIiwiYSI6ImNrMThrNGZzaTBoaGozcHJ2Z2Rubmp5czQifQ.zhOhtaww8YUX_OnbMakjhA";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v10",
  center: [-99.1711, 19.399],
  zoom: 15
});*/

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Router />
    </div>
  );
}

export default App;
