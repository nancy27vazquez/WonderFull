import React, { useState } from "react";
// import CardHorizontal from "../../components/common/CardHorizontal";
// import { getPlaces } from "../../services/places";
// import { AppContext } from "../../AppContext";
// import { useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Menu = () => {
  // const { user, properties, setPlaces } = useContext(AppContext);
  // const { push } = useHistory();

  // useEffect(() => {
  //   if (!user) return push("/login");

  //   getPlaces().then(res => {
  //     const { places } = res.data;
  //     console.log(places);
  //     setProperties(places);
  //   });
  // }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          WonderFull
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/discover">
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/recommend">
                Recommend
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/favorites">
                Favorites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/next-trip">
                Next trip
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/visited">
                Visited
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <img
                  src="https://res.cloudinary.com/dr95kad7s/image/upload/v1570585586/samples/cloudinary-icon.png"
                  width="30"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                <img
                  src="https://res.cloudinary.com/dr95kad7s/image/upload/v1570585586/samples/cloudinary-icon.png"
                  width="30"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
